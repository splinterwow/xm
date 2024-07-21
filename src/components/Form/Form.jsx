import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
      <h2>Kompaniya ma’lumotlari</h2>
      <p>Kompaniya haqida ma’lumotlarni kiriting</p>
      <div className={styles.uploadContainer}>
        <div className={styles.uploadCircle}></div>
        <button className={styles.uploadButton}>Yuklash</button>
      </div>
      <form>
        <label htmlFor="companyName">Kompaniya nomi *</label>
        <input type="text" id="companyName" name="companyName" placeholder="Kompaniya nomi" required />

        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" placeholder="Email" required />

        <label htmlFor="phone">Telefon raqami *</label>
        <div className={styles.phoneInput}>
          <select id="phoneCode" name="phoneCode">
            <option value="UZ">UZ +998</option>
          </select>
          <input type="tel" id="phone" name="phone" placeholder="Telefon raqami" required />
        </div>

        <label htmlFor="links">Linklar *</label>
        <div className={styles.links}>
          <button className={styles.linkButton}><i className="fa fa-globe"></i></button>
          <button className={styles.linkButton}><i className="fa fa-facebook"></i></button>
          <button className={styles.linkButton}><i className="fa fa-instagram"></i></button>
          <button className={styles.linkButton}><i className="fa fa-linkedin"></i></button>
        </div>

        <label htmlFor="country">Davlat *</label>
        <select id="country" name="country" required>
          <option value="">Davlat</option>
          <option value="UZ">Uzbekistan</option>
        </select>

        <label htmlFor="city">Shahar *</label>
        <select id="city" name="city" required>
          <option value="">Shahar</option>
          <option value="Tashkent">Toshkent</option>
        </select>

        <label htmlFor="address">Yashash joyi *</label>
        <input type="text" id="address" name="address" placeholder="Joy" required />

        <label htmlFor="employees">Hodimlar soni *</label>
        <select id="employees" name="employees" required>
          <option value="">Hodimlar soni</option>
        </select>

        <label htmlFor="description">Izoh *</label>
        <textarea id="description" name="description" placeholder="Kompaniya haqida izoh qo’shing" required></textarea>

        <div className={styles.buttons}>
          <button type="button" className={styles.backButton}>Orqaga</button>
          <button type="submit" className={styles.nextButton}>Keyingisi</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
