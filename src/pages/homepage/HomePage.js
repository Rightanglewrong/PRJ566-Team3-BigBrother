import styles from "./HomePage.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.floatingCard}>
        <h1 className={styles.title}>Home Page</h1>

        <div className={styles.gridSection}>
          {/* DashBoard Section */}
          <Link href="/dashboard" className={styles.gridItem}>
            <div className={styles.calendar}>
              <h2>DashBoard</h2>
              {/* Embed image for calendar */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/11068/11068821.png"
                alt="DashBoard Icon"
                className={styles.calendarIcon}
              />
            </div>
          </Link>

          {/* Meal Plan Section */}
          <Link href="/mealPlan" className={styles.gridItem}>
            <div className={styles.calendar}>
              <h2>Meal Plan</h2>
              {/* Embed image for calendar */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2224/2224109.png"
                alt="Meal Plan Icon"
                className={styles.calendarIcon}
              />
            </div>
          </Link>

          {/* Event Calendar Section */}
          <Link href="/calendar" className={styles.gridItem}>
            <div className={styles.calendar}>
              <h2>Event Calendar</h2>
              {/* Embed image for calendar */}
              <img
                src="https://static-00.iconduck.com/assets.00/calendar-icon-1995x2048-tot17508.png"
                alt="Event Calendar Icon"
                className={styles.calendarIcon}
              />
            </div>
          </Link>

          {/* News or Update Section */}
          <Link href="/newsletter" className={styles.gridItem}>
            <div className={styles.news}>
              <h2>News or Update</h2>
              {/* Add dynamic news or static content */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/7305/7305498.png"
                alt="News Icon"
                className={styles.calendarIcon}
              />
            </div>
          </Link>
        </div>

        <div className={styles.footer}>
          <Link href="/contacts" className={styles.footerLink}>
            Contacts
          </Link>
          <Link href="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;