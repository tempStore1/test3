/**
 * 搭配 Formik 套件的表單 Input 欄位。
 * 請將接收 useFormik 的變數傳入。
 * type 預設為 `text`。
 * @param title:  標題
 * @param formikType:  表單欄位類型(initialValues)
 * @param formik:  接收表單的變數
 */
const Input = (props: {
  title: string;
  formikType: string;
  formik: any;
  placeholder?: string;
  type?: string;
}) => {
  const { title, formikType, formik, placeholder, type = "text" } = props;
  return (
    <div className="todo-mb-4">
      <p className="todo-font-bold todo-font-text-sm todo-leading-5 todo-mb-1">
        {title}
      </p>
      <input
        className="todo-px-3 todo-font-medium todo-text-base todo-py-4 todo-w-full todo-text-[#9F9A91] todo-leading-6	todo-rounded-lg todo-mb-1 todo-min-w-[300px] placeholder:todo-font-medium placeholder:todo-text-[#9F9A91]"
        type={type}
        name={formikType}
        value={formik.values[formikType]}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[formikType] && formik.errors[formikType] && (
        <p className="todo-text-[#D87355] todo-font-bold todo-font-text-sm todo-leading-5">
          {formik.errors[formikType]}
        </p>
      )}
    </div>
  );
};

export default Input;
