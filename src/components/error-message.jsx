function ErrorMessage({ name, content }) {
  return (
    <p className="text-sm text-red-600 mt-2" id={`${name}-error`}>
      {content}
    </p>
  )
}

export { ErrorMessage }
