// app/routes/index.jsx
import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { login } from "../shopify.server";
import styles from "./styles.module.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  // If Shopify appended ?shop=… to finish OAuth, redirect into /app
  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  // Otherwise show the login form
  return { showForm: true };
};

export default function Index() {
  const { showForm } = useLoaderData();

  return (
    <div className={styles.index}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Welcome to CarbonPrint 👋</h1>
        <p className={styles.text}>
          Calculate and visualize your Shopify store’s carbon footprint in seconds.
        </p>

        {showForm && (
          <Form method="post" action="/auth/login" className={styles.form}>
            <label className={styles.label}>
              <span>Shop domain</span>
              <input
                className={styles.input}
                type="text"
                name="shop"
                placeholder="your-store.myshopify.com"
              />
            </label>
            <button className={styles.button} type="submit">
              Log in
            </button>
          </Form>
        )}

        <ul className={styles.list}>
          <li>
            <strong>Generate a product</strong> – try out our Admin GraphQL demo.
          </li>
          <li>
            <strong>View dashboard</strong> – see your carbon‐print analytics.
          </li>
          <li>
            <strong>Download report</strong> – export a PDF you can share.
          </li>
        </ul>
      </div>
    </div>
  );
}
