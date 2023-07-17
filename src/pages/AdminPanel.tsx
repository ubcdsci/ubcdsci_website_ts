import styles from '@/assets/styles/pages/AdminPanel.module.scss';
import Page from '@/templates/Page';



/**
 * Renders the Contact Us page.
 * @returns {JSX.Element} JSX Component.
 */
const AdminPanel = () => {
  return (
    <Page title="Admin Panel">
      <div className={styles.AdminPanel}>
        <div className={styles.Content}>

        </div>
      </div>
    </Page>
  );
};

export default AdminPanel;
