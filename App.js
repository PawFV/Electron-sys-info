const os = require('os')
const cpuInfo = document.getElementById('cpuInfo')
const systemName = document.getElementById('systemName')
const sysArr = [
  `System: ${os.type()}  ${os.platform()}`,
  `CPU: ${os.cpus()[0].model}`,
  `User: ${os.userInfo().username}`,
  `Homedir: ${os.userInfo().homedir}`
]

sysArr.map(msg => {
  const li = document.createElement('li')
  li.textContent = msg
  cpuInfo.appendChild(li)
})
