import React from 'react'

const Search = () => {
  return (
    <form className="flex items-center">
      <div className="">
        <div class="absolute my-2 mx-2 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-700 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input className="search" placeholder="Example, A Backpack" required />
      </div>
    </form>
  );
}

export default Search
