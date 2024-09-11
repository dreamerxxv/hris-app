<template>
    <div>
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
                        My Teams
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <form class="shrink md:w-[516px] w-full">
                        <input type="text" name="" id="" class="input-field block !outline-none !border-none italic ring-indigo-200
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
                                Available
                            </div>
                            <p class="text-grey">Empower company</p>
                        </div>
                        <NuxtLink :to="{ name: 'teams-addteam' }" class="btn btn-primary">Build New Team</NuxtLink>
                    </div>
                </div>
    
                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3">
                    <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                        <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                        <!-- <img src="../assets/svgs/ric-box.svg" alt=""> -->
                        <div class="rounded-full checked:ring-2 bg-[#f9f871]/40 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#FF9E1F]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                              </svg>
                        </div>
                        <div class="mt-6 mb-1 font-semibold text-center text-dark">
                            Growth Marketing
                        </div>
                        <p class="text-center text-grey">
                            12 People
                        </p>
                    </div>
                    <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                        <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                        <!-- <img src="../assets/svgs/ric-target.svg" alt=""> -->
                        <div class="rounded-full checked:ring-2 bg-primary/20 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                              </svg>
                        </div>
                        <div class="mt-6 mb-1 font-semibold text-center text-dark">
                            User Growth
                        </div>
                        <p class="text-center text-grey">
                            5,312 People
                        </p>
                    </div>
                    <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                        <a href="#" class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"></a>
                        <!-- <img src="../assets/svgs/ric-award.svg" alt=""> -->
                        <div class="rounded-full checked:ring-2 bg-[#C8FFB0]/70 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#61ad4d]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                              </svg>
                        </div>
                        <div class="mt-6 mb-1 font-semibold text-center text-dark">
                            Gamification
                        </div>
                        <p class="text-center text-grey">
                            893 People
                        </p>
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