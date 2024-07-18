import { component$, useStore, useTask$, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import authServices from "~/Auth/userAuth";
import { isBrowser } from "@builder.io/qwik/build";

export default component$(() => {
  const formdata = useStore({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmit = $(async () => {
    if (formdata.email === "" || formdata.password === "") {
      alert("Please fill all fields");
    } else {
      try {
        const user = await authServices.login({
          email: formdata.email,
          password: formdata.password,
        });
        if (user) {
          navigate("/dashboard");
        } else {
          alert("Login failed");
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("An error occurred during login.");
      }
    }
  });

  useTask$(() => {
    const user = isBrowser && localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  });

  return (
    <form
      onSubmit$={onSubmit}
      preventdefault:submit
      class="flex flex-col gap-y-5 w-full mt-5"
    >
      <div class="w-full mb-5">
        <input
          placeholder="Email"
          type="email"
          class="rounded-base border-2 border-black p-[10px] ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-3/5 self-center"
          onChange$={(event, currentTarget) =>
            (formdata.email = currentTarget.value)
          }
        />
      </div>

      <div class="w-full mb-5">
        <input
          placeholder="Password"
          type="password"
          class="rounded-base border-2 border-black p-[10px] ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-2 transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none w-3/5"
          onChange$={(event, currentTarget) =>
            (formdata.password = currentTarget.value)
          }
        />
      </div>

      <div class="w-full">
        <input
          type="submit"
          value="Submit"
          class="flex text-text cursor-pointer items-center rounded-base border-2 border-black dark:border-darkBorder bg-mainAccent px-4 py-2 text-sm font-base shadow-base dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none w-1/3"
        />
      </div>
    </form>
  );
});
