/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../astro.0166d47f.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>klvnh</title>
${renderHead($$result)}</head>
<body>

    <div id="container" class="font-mono">
        
        <div id="wrap" class="flex justify-center items-center h-screen">
            <img id="profile" class="m-3 rounded-full w-32 h-auto" src="https://whatifgaming.com/wp-content/uploads/2022/01/Tears-pfp.jpg" alt="profile-image">
            <div id="intro" class="m-3 text-xl font-bold underline decoration-4 underline-offset-[8px] sm:text-xl md:text-2xl lg:text-4xl">
                Hello, Im Kelvin.
            </div>  
        </div>

        <div id="about-me" class="bg-black opacity-90 text-white h-screen">
            <h1 class="p-20 text-xl underline decoration-4 underline-offset-[8px] sm:text-xl md:text-2xl lg:text-4xl">About me</h1>
            <div class="flex flex-col justify-center items-center text-left text-xl pl-10 sm:text-xs md:text-xl lg:text-2xl">
                <ul>
                    <li class="pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita, voluptatem quisquam qui minus molestias sunt? Blanditiis</li>
                    <li class="pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita, voluptatem quisquam qui minus molestias sunt? Blanditiis</li>
                    <li class="pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita, voluptatem quisquam qui minus molestias sunt? Blanditiis</li>
                </ul>
            </div>
        </div>

    </div>

</body></html>`;
}, "C:/Users/ii_sk/OneDrive/Code/my-app/src/pages/index.astro");

const $$file$1 = "C:/Users/ii_sk/OneDrive/Code/my-app/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Np = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Np;
  return renderTemplate``;
}, "C:/Users/ii_sk/OneDrive/Code/my-app/src/pages/np.astro");

const $$file = "C:/Users/ii_sk/OneDrive/Code/my-app/src/pages/np.astro";
const $$url = "/np";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Np,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
