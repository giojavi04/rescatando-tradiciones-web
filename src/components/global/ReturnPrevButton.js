import React from 'react'

const ReturnPrevButton = () => {
  return (
    <button
      type="submit"
      className="mt-10 w-full inline-flex items-center justify-center px-6 py-2 border border-rtSecondary rounded-md shadow-sm text-base text-rtSecondary font-medium text-white hover:bg-rtSecaondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 sm:w-auto"
      onClick={() => window.history.back()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Regresar
    </button>
  )
}

export default ReturnPrevButton
