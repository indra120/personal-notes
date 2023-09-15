import { MdError } from 'react-icons/md'

function InputError() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
      <MdError className="h-5 w-5 text-red-500" aria-hidden="true" />
    </div>
  )
}

export { InputError }
