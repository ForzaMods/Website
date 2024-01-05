<template>
  <Page :config="$cfg()['projects-page']['2']">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">{{ $cfg()['projects-page']['2'].name }}</h1>
        <div class="flex justify-center items-center my-20 flex-col gap-10">
          <div class="flex flex-col gap-5 text-lg lg:text-xl lg:px-10">
            <h2 class="font-semibold text-3xl">Description:</h2>
            <p>{{ $cfg()['projects-page']['2'].description }}</p>
            <h2 class="font-semibold text-3xl">Features:</h2>
            <ul class="child:mb-5">
              <li>Mod Installation: The mod manager provides a streamlined installation process for mods. It automatically detects compatible mods and ensures that they are properly installed in your Forza game directory. This saves you time and effort by eliminating the need for manual file placement.</li>
              <li>Mod Compatibility: The mod manager maintains a comprehensive database of mods, complete with compatibility information. It checks the compatibility of installed mods and alerts you if any conflicts are detected. This helps you avoid potential issues and ensures a stable modding experience.</li>
              <li>Mod Management: Easily enable or disable mods within the mod manager's interface. You can activate specific mods for different playthroughs or switch between different mod configurations with ease. The mod manager keeps track of your mod selections and automatically adjusts the game files accordingly.</li>
              <li>Mod Updates: Stay up to date with the latest mod releases and updates. The mod manager periodically checks for updates and notifies you when new versions or patches are available. It can also automatically download and install updates, ensuring that your mods are always current.</li>
              <li>Mod Removal: When you no longer want a mod, the mod manager makes uninstallation hassle-free. It removes all associated mod files from your game directory and restores the original game files, leaving no traces of the mod behind.</li>
            </ul>
          </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row mb-8">
          <a href="https://github.com/ForzaMods/Mod-Manager" target=_blank class="linkButton">Source Code</a>
        </div>
      </div>
    </div>
  </Page>
</template>