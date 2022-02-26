import Layout from "@/components/Layout";
import styles from "@/styles/ErrorPage.module.css";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <Layout title="Page not found">
      <div className={styles.container}>
        <h1>
          <FaExclamationTriangle className={styles.erroricon} /> 404
        </h1>
        <p>Sorry, there is nothing here</p>
        <Link href="/">
          <a>
            <p>Go back to home page</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
