<template>
    <div>
        <section class="py-[70px] flex flex-col items-center justify-center px-4">
            <div class="text-[32px] font-semibold text-dark">
                Give a Role
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Complete the information to make it more <br>
                easier when introduce to team
            </p>
            <form class="w-full card">
                <div class="flex flex-col items-center mb-[14px]">
                    <!-- <img src="../assets/images/user-f-1.png" width="70" alt=""> -->
                     
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 text-lg font-semibold">
                        Andini Danna
                    </div>
                    <p class="text-base text-grey">
                        ke@manasihhbang.com
                    </p>
                </div>
                <div class="form-group">
                    <label for="" class="text-grey">Select Role</label>
                    <select name="" id="" class="appearance-none input-field form-icon-chevron_down">
                        <option value="" selected>Product Designer</option>
                        <option value="">Website Developer</option>
                        <option value="">Executive Manager</option>
                        <option value="">iOS Engineer</option>
                    </select>
                </div>
    
                <!-- Responsibilities -->
                <section>
                    <label for="" class="text-grey">
                        Responsibilities
                    </label>
                    <div class="flex flex-col gap-4 mt-[10px]">
                        <div class="flex items-start md:items-center gap-[6px]">
                            <!-- <img src="../assets/svgs/ic-check-circle.svg" alt=""> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            <span class="text-sm text-dark">
                                Lorem ipsum tanggung jawab pixel studio website
                            </span>
                        </div>
                        <div class="flex items-start md:items-center gap-[6px]">
                            <!-- <img src="../assets/svgs/ic-check-circle.svg" alt=""> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            <span class="text-sm text-dark">
                                Growth strategy studio make things better again with
                            </span>
                        </div>
                        <div class="flex items-start md:items-center gap-[6px]">
                            <!-- <img src="../assets/svgs/ic-check-circle.svg" alt=""> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            <span class="text-sm text-dark">
                                Menyediakan beberapa kit untuk kebutuhan
                            </span>
                        </div>
                        <div class="flex items-start md:items-center gap-[6px]">
                            <!-- <img src="../assets/svgs/ic-check-circle.svg" alt=""> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            <span class="text-sm text-dark">
                                Bekerja sama dengan designer dan developer tim
                            </span>
                        </div>
                    </div>
                </section>
                <a href="employee_add-to-team.html" class="w-full btn btn-primary mt-[14px]">
                    Continue
                </a>
            </form>
        </section>
    </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>