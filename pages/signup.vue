<template>
    <div>
        <section class="py-[50px] flex flex-col items-center justify-center px-4">
            <img src="/assets/images/humanwork-logo.svg" class="w-[200px] mr-6" alt="" />
            <div class="text-[32px] font-semibold text-dark mt-[70px]">
                Sign Up
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Manage your employees to achieve <br> a bigger goals for your company
            </p>
            <form class="w-full card">
                <div class="form-group">
                    <label for="" class="text-grey">Company Name</label>
                    <input type="text" class="input-field">
                </div>
                <div class="form-group">
                    <label for="" class="text-grey">Email Address</label>
                    <input type="email" class="input-field">
                </div>
                <div class="form-group">
                    <label for="" class="text-grey">Password</label>
                    <input type="password" class="input-field">
                </div>
                <a href="signin.html" class="w-full btn btn-primary mt-[14px]">
                    Continue
                </a>
                <!-- <button type="button" class="w-full btn btn-primary mt-[14px]">
                    Continue
                </button> -->
            </form>
        </section>
    </div>
</template>