import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] font-sans dark:bg-[#0a0a0a]">
<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-14 py-32 px-16 bg-[#0a0a0a] dark:bg-[#0a0a0a] sm:items-start">
        <Image
          src="/prettiflow.svg"
          alt="PrettiFlow logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50 dark:text-zinc-50">
            To get started, Prompt in the chat panel :)
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400 dark:text-zinc-400">
Prettiflow Makes software development easier and scalable         
          </p>
        </div>
       
      </main>
    </div>
  );
}
