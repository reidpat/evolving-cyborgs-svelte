var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  get: () => get,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_cookie = require("cookie");
var import_supabaseClient_51bc0a25 = require("../../chunks/supabaseClient-51bc0a25.js");
var import_supabase_js = require("@supabase/supabase-js");
async function post(event) {
  let session = await event.request.json();
  return {
    status: 200,
    body: "success",
    headers: {
      "Set-Cookie": (0, import_cookie.serialize)("session", JSON.stringify(session), {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: { "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\patte\\AppData\\Roaming", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_12508_LQKBBHFVFIYHPBGU", "COLOR": "1", "COLORTERM": "truecolor", "CommonProgramFiles": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "REID-STUDIO-WRI", "ComSpec": "C:\\WINDOWS\\system32\\cmd.exe", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EDITOR": "notepad.exe", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\Users\\patte\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", "HOME": "C:\\Users\\patte", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\patte", "INIT_CWD": "C:\\Coding\\evolving-cyborgs-svelte", "LANG": "en_GB.UTF-8", "LOCALAPPDATA": "C:\\Users\\patte\\AppData\\Local", "LOGONSERVER": "\\\\REID-STUDIO-WRI", "NODE": "C:\\Program Files\\nodejs\\node.exe", "NODE_ENV": "production", "NODE_EXE": "C:\\Program Files\\nodejs\\\\node.exe", "NPM_CLI_JS": "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", "npm_command": "run-script", "npm_config_cache": "C:\\Users\\patte\\AppData\\Local\\npm-cache", "npm_config_engine_strict": "true", "npm_config_globalconfig": "C:\\Users\\patte\\AppData\\Roaming\\npm\\etc\\npmrc", "npm_config_global_prefix": "C:\\Users\\patte\\AppData\\Roaming\\npm", "npm_config_init_module": "C:\\Users\\patte\\.npm-init.js", "npm_config_local_prefix": "C:\\Coding\\evolving-cyborgs-svelte", "npm_config_metrics_registry": "https://registry.npmjs.org/", "npm_config_node_gyp": "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", "npm_config_noproxy": "", "npm_config_prefix": "C:\\Users\\patte\\AppData\\Roaming\\npm", "npm_config_userconfig": "C:\\Users\\patte\\.npmrc", "npm_config_user_agent": "npm/8.1.0 node/v16.13.0 win32 x64 workspaces/false", "npm_execpath": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", "npm_lifecycle_event": "build", "npm_lifecycle_script": "svelte-kit build", "npm_node_execpath": "C:\\Program Files\\nodejs\\node.exe", "npm_package_json": "C:\\Coding\\evolving-cyborgs-svelte\\package.json", "npm_package_name": "evolving-cyborgs-svelte", "npm_package_version": "0.0.1", "NPM_PREFIX_NPM_CLI_JS": "C:\\Users\\patte\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", "NUMBER_OF_PROCESSORS": "8", "OneDrive": "C:\\Users\\patte\\OneDrive - UBC", "OneDriveCommercial": "C:\\Users\\patte\\OneDrive - UBC", "OneDriveConsumer": "C:\\Users\\patte\\OneDrive", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "Path": "C:\\Coding\\evolving-cyborgs-svelte\\node_modules\\.bin;C:\\Coding\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Program Files (x86)\\Calibre2\\;C:\\Users\\patte\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\patte\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\patte\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\patte\\AppData\\Roaming\\npm;", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 140 Stepping 1, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "8c01", "ProgramData": "C:\\ProgramData", "ProgramFiles": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROMPT": "$P$G", "PSExecutionPolicyPreference": "Bypass", "PSModulePath": "C:\\Users\\patte\\OneDrive\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "SESSIONNAME": "Console", "SystemDrive": "C:", "SystemRoot": "C:\\WINDOWS", "TEMP": "C:\\Users\\patte\\AppData\\Local\\Temp", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.66.2", "TMP": "C:\\Users\\patte\\AppData\\Local\\Temp", "USERDOMAIN": "REID-STUDIO-WRI", "USERDOMAIN_ROAMINGPROFILE": "REID-STUDIO-WRI", "USERNAME": "patte", "USERPROFILE": "C:\\Users\\patte", "VITE_SVELTEKIT_AMP": "", "VITE_SVELTEKIT_APP_VERSION": "1650855778800", "VITE_SVELTEKIT_APP_VERSION_FILE": "_app/version.json", "VITE_SVELTEKIT_APP_VERSION_POLL_INTERVAL": "0", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\Users\\patte\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\Users\\patte\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-d8bf7b67e2-sock", "windir": "C:\\WINDOWS", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7
      })
    }
  };
}
async function get(event) {
  let access_token = await event.request.headers.get("token");
  const { user, error } = await import_supabaseClient_51bc0a25.s.auth.setAuth(access_token);
  if (error) {
    return {
      status: error.status,
      message: error.message
    };
  }
  return {
    status: 200,
    message: "all good!"
  };
}
