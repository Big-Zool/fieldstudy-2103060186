import { useRef, useState } from "react";
import { contactSchema, FIELDS } from "./schema.js";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function App() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const summaryRef = useRef(null);

  function update(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    // Clear a field's error as soon as it becomes valid, so messages never go stale.
    if (errors[name]) {
      const one = contactSchema.shape[name].safeParse(value);
      if (one.success) setErrors((er) => { const n = { ...er }; delete n[name]; return n; });
    }
  }

  function submit(e) {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const found = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (!found[key]) found[key] = issue.message;
      }
      setErrors(found);
      setSent(false);
      // Move focus to the summary so screen-reader and keyboard users hear what went wrong.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setErrors({});
    setSent(true); // Demo only: nothing is sent anywhere.
  }

  const errorList = FIELDS.filter((f) => errors[f.name]);

  return (
    <main className="page">
      <h1>Contact us</h1>
      <p className="intro">All fields are required. We reply within two working days.</p>

      {errorList.length > 0 && (
        <div className="summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <h2>Please fix {errorList.length} {errorList.length === 1 ? "problem" : "problems"}:</h2>
          <ul>
            {errorList.map((f) => (
              <li key={f.name}><a href={`#${f.name}`}>{f.label}: {errors[f.name]}</a></li>
            ))}
          </ul>
        </div>
      )}

      {sent && (
        <p className="success" role="status">Thank you — your message is ready. (This demo does not send anything.)</p>
      )}

      <form noValidate onSubmit={submit}>
        {FIELDS.map((f) => {
          const err = errors[f.name];
          const props = {
            id: f.name,
            name: f.name,
            value: values[f.name],
            onChange: update,
            autoComplete: f.autoComplete,
            required: true,
            "aria-invalid": err ? "true" : "false",
            "aria-describedby": err ? `${f.name}-error` : undefined,
          };
          return (
            <div className={`field${err ? " has-error" : ""}`} key={f.name}>
              <label htmlFor={f.name}>{f.label} <span className="req">(required)</span></label>
              {f.type === "textarea" ? <textarea rows={6} {...props} /> : <input type={f.type} {...props} />}
              {err && <p className="error" id={`${f.name}-error`}>{err}</p>}
            </div>
          );
        })}
        <button type="submit">Send message</button>
      </form>
    </main>
  );
}
