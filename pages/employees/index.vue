<template>
    <div>
        
    <!-- Main Content -->
    <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
        <!-- Top Section -->
        <section class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row">
            <div class="flex items-center justify-between gap-4">
                <a href="#" id="toggleOpenSidebar" class="lg:hidden">
                    <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7">
                        </path>
                    </svg>
                </a>
                <div class="text-[32px] font-semibold text-dark">
                    Employees
                </div>
            </div>
            <div class="flex items-center gap-4">
                <form class="shrink md:w-[516px] w-full">
                    <input type="text" name="" id="" class="input-field !outline-none !border-none italic form-icon-search ring-indigo-200
                        focus:ring-2 transition-all duration-300 w-full" placeholder="Search people, team, project">
                </form>
                <a href="#"
                    class="flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] relative notification-dot">
                    <!-- <img src="../assets/svgs/ic-bell.svg" alt=""> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                      </svg>
                </a>
            </div>
        </section>

        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
                    <div>
                        <div class="text-xl font-medium text-dark">
                            Statistics
                        </div>
                        <p class="text-grey">Your team powers</p>
                    </div>
                    <NuxtLink :to="{ name: 'employees-addemployee' }" class="btn btn-primary">Add Employee</NuxtLink>
                </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
                <div class="card !gap-y-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">In Total</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                425,000
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card !gap-y-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Active</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                205,399
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card !gap-y-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Inactive</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                142,593
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <div class="text-xl font-medium text-dark">
                            People
                        </div>
                        <p class="text-grey">The rangers</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3">
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Andini Danna
                    </div>
                    <p class="text-center text-grey">
                        Product Designer
                    </p>
                    <div class="mt-[30px] text-success flex items-center gap-[6px]">
                        <!-- <img src="../assets//svgs/ic-check-circle.svg" alt=""> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          
                        Verified
                    </div>
                </div>
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-m-1.png" width="70" alt=""> -->
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Ferrari Three
                    </div>
                    <p class="text-center text-grey">
                        Quality Manager
                    </p>
                    <div class="mt-[30px] text-success flex items-center gap-[6px]">
                        <!-- <img src="../assets//svgs/ic-check-circle.svg" alt=""> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-m-2.png" width="70" alt=""> -->
                     
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Sapiire Muke
                    </div>
                    <p class="text-center text-grey">
                        iOS Engineer
                    </p>
                    <a href="#verify" class="text-blue-700 mt-[30px] underline relative z-20">
                        Verify Now
                    </a>
                </div>
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-f-2.png" width="70" alt=""> -->
                     
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Mw Kemanna
                    </div>
                    <p class="text-center text-grey">
                        Website Developer
                    </p>
                    <div class="mt-[30px] text-success flex items-center gap-[6px]">
                        <!-- <img src="../assets//svgs/ic-check-circle.svg" alt=""> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-m-3.png" width="70" alt=""> -->
                     
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Onna Appa
                    </div>
                    <p class="text-center text-grey">
                        Product Designer
                    </p>
                    <div class="mt-[30px] text-success flex items-center gap-[6px]">
                        <!-- <img src="../assets//svgs/ic-check-circle.svg" alt=""> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-f-3.png" width="70" alt=""> -->
                     
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Hehe Nadiia
                    </div>
                    <p class="text-center text-grey">
                        Quality Manager
                    </p>
                    <div class="mt-[30px] text-success flex items-center gap-[6px]">
                        <!-- <img src="../assets//svgs/ic-check-circle.svg" alt=""> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-m-4.png" width="70" alt=""> -->
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Jamboel
                    </div>
                    <p class="text-center text-grey">
                        iOS Engineer
                    </p>
                    <a href="#verify" class="text-blue-700 mt-[30px] underline relative z-20">
                        Verify Now
                    </a>
                </div>
                <!-- Card -->
                <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                    <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                    <!-- <img src="../assets/images/user-f-4.png" width="70" alt=""> -->
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Eksis Melita
                    </div>
                    <p class="text-center text-grey">
                        Website Developer
                    </p>
                    <div class="mt-[30px] text-success flex items-center gap-[6px]">
                        <!-- <img src="../assets//svgs/ic-check-circle.svg" alt=""> -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        Verified
                    </div>
                </div>
            </div>
        </section>

    </div>

    </div>
</template>

<script>
export default {
    layout: 'dashboard',
}
</script>