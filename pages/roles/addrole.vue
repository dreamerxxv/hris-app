<template>
    <div>
        <section class="py-[70px] flex flex-col items-center justify-center px-4">
            <div class="text-[32px] font-semibold text-dark">
                New Role
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Manage your employees to achieve <br>
                a bigger goals for your company
            </p>
            <form class="w-full card">
                <div class="form-group">
                    <label for="" class="text-grey">Role Name</label>
                    <input type="text" class="input-field" value="Product Marketing">
                </div>
                <div class="form-group">
                    <label for="idRes" class="text-grey">Responsibility</label>
                    <ul id="listResp" class="flex flex-col gap-4">
                        <li class="inline-flex items-center w-full gap-5">
                            <input type="text" id="idRes" name="responsibility" class="w-full input-field">
                            <a href="#" role="button" id="addRsp">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>

                            </a>
                        </li>
                    </ul>
                </div>
                <a href="roles.html" class="w-full btn btn-primary mt-[14px]">
                    Save Role
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