function InputLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium mb-2 dark:text-white"
    >
      {children}
    </label>
  )
}

export { InputLabel }
