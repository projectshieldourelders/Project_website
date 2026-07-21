import Logo from "@/components/Layout/Header/Logo"
import { useState } from "react"

export const Donation = () => {
  const [requestType, setRequestType] = useState("Senior center");

  function setType(value: string) {
    setRequestType(value);
  }

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[220px]">
        <Logo />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="First name"
            className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Last name"
            className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-2.5">
          <input
            type="text"
            value={requestType}
            onChange={(e) => setType(e.target.value)}
            placeholder="Where should we bring the program?"
            className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-2">
          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-2">
              <input type="radio" name="request-type" id="senior-center" onChange={(e) => setType(e.target.value)} value="Senior center" defaultChecked />
              <label htmlFor="senior-center" className="text-muted dark:text-white/60">Senior center</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="request-type" id="library" onChange={(e) => setType(e.target.value)} value="Library" />
              <label htmlFor="library" className="text-muted dark:text-white/60">Library</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="request-type" id="family" onChange={(e) => setType(e.target.value)} value="Family group" />
              <label htmlFor="family" className="text-muted dark:text-white/60">Family group</label>
            </div>
          </div>
        </div>
        <div className="mb-[22px] flex items-center gap-6">
          <input
            type="text"
            placeholder="Short note"
            className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="flex gap-2 items-center">
          <input type="checkbox" id="updates" name="updates" />
          <label htmlFor="updates" className="text-muted dark:text-white/60 text-base">Send me scam-safety updates</label>
        </div>

        <div className="mb-0 mt-6">
          <a
            href="mailto:projectshieldourelders@gmail.com?subject=Shield%20Our%20Elders%20workshop%20request"
            className="text-white w-full text-base bg-linear-to-r from-primary to-secondary font-semibold border border-transparent py-4 px-7 rounded-md hover:text-primary hover:border-primary hover:from-transparent hover:to-transparent cursor-pointer block text-center"
          >
            Send request
          </a>
        </div>
      </form>
    </>
  )
}
