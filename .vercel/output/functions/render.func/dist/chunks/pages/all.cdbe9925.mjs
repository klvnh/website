/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../astro.0166d47f.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
        
        <div id="wrap" class="flex justify-center items-center">

            <img id="profile" class="rounded-full mr-6 w-32 h-auto" src="https://whatifgaming.com/wp-content/uploads/2022/01/Tears-pfp.jpg" alt="profile-image">
    
            <div id="intro" class="flex justify-center items-center h-screen text-4xl font-bold underline decoration-4 underline-offset-8">
                Hello, Im Kelvin.
            </div>

        </div>

        <div id="about-me" class="bg-black opacity-90 h-screen">
            <h1 class="pt-20 pl-20 pr-20 text-4xl text-white underline decoration-4 underline-offset-8">About me</h1>
        </div>

    </div>

</body></html>`;
}, "C:/Users/ii_sk/OneDrive/Code/my-app/src/pages/index.astro");

const $$file = "C:/Users/ii_sk/OneDrive/Code/my-app/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
