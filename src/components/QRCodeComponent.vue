<template>
  <div class="flex h-full min-h-screen w-screen items-center justify-center bg-slate-300">
    <div
      class="flex size-full max-h-qr-code max-w-80 flex-col items-center gap-y-6 rounded-qr-code bg-white px-4 pb-10 pt-4"
    >
      <img class="rounded-qr-icon" src="/images/image-qr-code.png" />
      <div class="flex flex-col items-center justify-center gap-y-4 px-4">
        <h1 class="font-outfit text-qr-title font-bold text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p class="text-center font-outfit text-qr-paragraph leading-5 text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the
          next level
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
