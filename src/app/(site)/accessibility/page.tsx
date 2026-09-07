import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/Site/PageHero";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility features and commitments for Shield Our Elders.",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-[#f7f8f5] text-[#183b36]">
      <PageHero
        title="Reading and accessibility"
        intro="This site is designed for clear language, larger type, comfortable spacing, and predictable controls."
        tone="mist"
        layout="centered"
      />

      <section className="bg-[#f2f8f6] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              Reading options stay with you
            </h2>
            <div className="space-y-6 text-xl leading-8 text-[#526661]">
              <p>
                The Reading options button in the header can enlarge the text,
                increase contrast, or reduce motion. The choice is saved on the
                device, so it does not need to be set again on every page.
              </p>
              <p>
                The controls use familiar labels instead of technical settings.
                Changes appear immediately, and the standard view can be
                restored from the same menu.
              </p>
            </div>
          </div>
          <div className="mt-20 pt-14">
            <h2 className="font-display text-5xl sm:text-6xl">
              How the site is built
            </h2>
            <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:[&>*]:flex-1">
              <article className="pt-6">
                <h3 className="font-display text-3xl">Reading</h3>
                <p className="mt-4 text-lg leading-8 text-[#526661]">
                  Atkinson Hyperlegible body text, generous line spacing, plain
                  language, and restrained line lengths make longer explanations
                  easier to follow without crowding the page.
                </p>
              </article>
              <article className="pt-6">
                <h3 className="font-display text-3xl">Interaction</h3>
                <p className="mt-4 text-lg leading-8 text-[#526661]">
                  Buttons have large tap areas, keyboard focus remains visible,
                  and links, menus, forms, and carousels can be used without
                  relying on a mouse.
                </p>
              </article>
              <article className="pt-6">
                <h3 className="font-display text-3xl">Comfort</h3>
                <p className="mt-4 text-lg leading-8 text-[#526661]">
                  Information is not communicated by color alone. Higher
                  contrast and reduced motion are available, and animation stops
                  when the device requests less movement.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#183b36] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[86rem]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">
              Access continues beyond the screen
            </h2>
            <div className="space-y-6 text-xl leading-8 text-[#e3efec]">
              <p>
                Hosts can tell us about hearing, vision, mobility, language, or
                seating needs before a workshop. We can slow the pace, repeat
                instructions, describe visual examples, and provide large-print
                materials without asking participants to explain private medical
                details.
              </p>
              <p>
                The website also works with browser zoom up to 200%, device text
                and contrast settings, reduced-motion preferences, screen
                readers, and keyboard navigation. We test common tasks and
                revise unclear language as new barriers are found.
              </p>
              <Link
                href="/contact"
                className="doodle-button inline-flex bg-white px-7 py-4 font-bold text-[#183b36]"
              >
                Tell us what would help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d4c9e8] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-10 lg:flex-row lg:gap-24 lg:[&>*]:flex-1">
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Found a barrier?
          </h2>
          <div>
            <p className="text-xl leading-8">
              Tell us which page or activity was difficult, what device or
              assistive technology you used, and what you expected to happen. A
              short description is enough, and you do not need to know the
              technical cause.
            </p>
            <p className="mt-5 text-xl leading-8">
              You can also open the resource library to use printable guides
              instead of reading the material on screen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="mailto:projectshieldourelders@gmail.com?subject=Accessibility%20feedback"
                className="doodle-button inline-flex bg-white px-7 py-4 font-bold"
              >
                Email accessibility feedback
              </Link>
              <Link
                href="/resources"
                className="doodle-button inline-flex bg-[#2f756b] px-7 py-4 font-bold text-white"
              >
                Open resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
