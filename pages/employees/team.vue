<template>
    <div>
        <section class="py-[70px] flex flex-col items-center justify-center px-4">
            <div class="text-[32px] font-semibold text-dark">
                Add to Team
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Add your new people to grow the <br>
                company reaching their goals
            </p>
            <div class="w-full card !max-w-[560px] sm:!flex-row items-center justify-between">
                <div class="flex flex-row items-center gap-4">
                    <!-- <img src="../assets/images/user-f-1.png" width="70" alt=""> -->
                    <img src="/assets/images/user-profile.png" class="rounded-full" width="70" alt="">
                    <div>
                        <div class="text-lg font-semibold">
                            Andini Danna
                        </div>
                        <p class="text-base text-grey">
                            ke@manasihhbang.com
                        </p>
                    </div>
                </div>
                <p class="text-right text-grey">
                    Product Designer
                </p>
            </div>
    
            <!-- Your Teams -->
            <section class="pt-[50px]">
                <!-- Section Header -->
                <div class="mb-[30px]">
                    <div class="flex items-center justify-between gap-6">
                        <div>
                            <div class="text-xl font-medium text-dark">
                                Your Teams
                            </div>
                            <p class="text-grey">Improve your growth</p>
                        </div>
                    </div>
                </div>
    
                <form>
                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3 mb-[50px]">
                        <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                            <input type="radio" name="gamification" id="gamification"
                                class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none">
                            <!-- <img src="../assets/svgs/ric-box.svg" alt=""> -->
                             <div class="rounded-full checked:ring-2 bg-primary/20 p-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                  </svg>
                            </div>
                              
                            <div class="mt-6 mb-1 font-semibold text-center text-dark">
                                Product Growth
                            </div>
                            <p class="text-center text-grey">
                                810 People
                            </p>
                        </div>
                        <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                            <input type="radio" name="gamification" id="gamification"
                                class="absolute inset-0 checked:ring-2 ring-[#f9f871] rounded-[26px] appearance-none">

                             <div class="rounded-full checked:ring-2 bg-[#f9f871]/40 p-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#FF9E1F]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                  </svg>
                            </div>
                            <div class="mt-6 mb-1 font-semibold text-center text-dark">
                                Marketing
                            </div>
                            <p class="text-center text-grey">
                                15,810 People
                            </p>
                        </div>
                        <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                            <input type="radio" name="gamification" id="gamification"
                                class="absolute inset-0 checked:ring-2 ring-[#3ff0b9] rounded-[26px] appearance-none">

                            <div class="rounded-full checked:ring-2 bg-[#3ff0b9]/20 p-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                                stroke="currentColor" class="size-6 text-[#1a775a]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                  </svg>
                            </div>
                              
                            <div class="mt-6 mb-1 font-semibold text-center text-dark">
                                Globalization
                            </div>
                            <p class="text-center text-grey">
                                300 People
                            </p>
                        </div>
                        <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0">
                            <input type="radio" name="gamification" id="gamification"
                                class="absolute inset-0 checked:ring-2 ring-[#a6f88d] rounded-[26px] appearance-none">
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
                                25 People
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <a href="employees.html" id="continueBtn" class="hidden btn btn-primary">
                            Continue
                        </a>
                    </div>
                </form>
            </section>
        </section>
    </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>