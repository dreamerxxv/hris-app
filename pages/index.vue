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
                  Overview
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
              <div class="flex items-center justify-between gap-6">
                  <div>
                      <div class="text-xl font-medium text-dark">
                          Statistics
                      </div>
                      <p class="text-grey">Your business growth</p>
                  </div>
              </div>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
              <div class="card !gap-y-10 min-h-[150px]">
                  <div class="flex items-center justify-between">
                      <div>
                          <p class="text-grey">Employees</p>
                          <div class="text-[32px] font-bold text-dark mt-[6px]">
                              0
                          </div>
                      </div>
                      <NuxtLink :to="{ name: 'employees-addemployee' }" class="rounded-full bg-secondary p-2">
                          <!-- <img src="../assets/svgs/ric-plus.svg" alt=""> -->
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          
                      </NuxtLink>
                  </div>
              </div>
              <div class="card !gap-y-10 min-h-[150px]">
                  <div class="flex items-center justify-between">
                      <div>
                          <p class="text-grey">Teams</p>
                          <div class="text-[32px] font-bold text-dark mt-[6px]">
                              0
                          </div>
                      </div>
                      <NuxtLink :to="{ name: 'teams-addteam' }"class="rounded-full bg-secondary p-2">
                          <!-- <img src="../assets/svgs/ric-plus.svg" alt=""> -->
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          
                      </NuxtLink>
                  </div>
              </div>
              <div class="card !gap-y-10 min-h-[150px]">
                  <div class="flex items-center justify-between">
                      <div>
                          <p class="text-grey">Projects</p>
                          <div class="text-[32px] font-bold text-dark mt-[6px]">
                              0
                          </div>
                      </div>
                      <a href="#" class="rounded-full bg-secondary p-2">
                          <!-- <img src="../assets/svgs/ric-plus.svg" alt=""> -->
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <section class="pt-[50px]">
          <div class="grid md:grid-cols-2 gap-11">
              <!-- Documents -->
              <div>
                  <!-- Section Header -->
                  <div class="mb-[30px]">
                      <div class="flex items-center justify-between gap-6">
                          <div>
                              <div class="text-xl font-medium text-dark">
                                  Documents
                              </div>
                              <p class="text-grey">Standard procedure</p>
                          </div>
                      </div>
                  </div>
                  <div class="card md:min-h-[468px]">
                      <div class="m-auto text-center">
                          <div class="text-xl font-bold text-dark">
                              No Documents
                          </div>
                          <p class="text-grey mt-5 mb-[30px]">
                              Add guidance or design style for <br>
                              your employees in company
                          </p>
                          <button type="button" class="btn btn-primary">
                              Upload File
                          </button>
                      </div>
                  </div>
              </div>

              <!-- History -->
              <div>
                  <!-- Section Header -->
                  <div class="mb-[30px]">
                      <div class="flex items-center justify-between gap-6">
                          <div>
                              <div class="text-xl font-medium text-dark">
                                  History
                              </div>
                              <p class="text-grey">Track the flow</p>
                          </div>
                      </div>
                  </div>
                  <div class="card min-h-[468px]">
                      <div class="m-auto text-center">
                          <div class="text-xl font-bold text-dark">
                              No History
                          </div>
                          <p class="text-grey mt-5 mb-[30px]">
                              Information of employees added <br>
                              and promoting shown here
                          </p>
                          <button type="button" class="btn btn-primary">
                              Upload File
                          </button>
                      </div>
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
