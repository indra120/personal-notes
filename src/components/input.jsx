import { InputError } from './input-error'
import { ErrorMessage } from './error-message'

function Input({ name, type = 'text', error, ...props }) {
  const attr = { id: name, name, ...props }

  return (
    <>
      <div className="relative">
        {!error ? (
          <input
            type={type}
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            {...attr}
          />
        ) : (
          <>
            <input
              type={type}
              className="py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              aria-describedby={`${name}-error`}
              {...attr}
            />

            <InputError />
          </>
        )}
      </div>

      {error && <ErrorMessage name={name} content={error} />}
    </>
  )
}

export { Input }
