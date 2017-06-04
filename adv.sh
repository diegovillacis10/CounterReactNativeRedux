# Thanks to https://gist.github.com/hidroh/67b2ee7bbdd9038450c00d8a4d69c3fa
emulator_path="$HOME/Library/Android/sdk/emulator/emulator"
$emulator_path -list-avds | cat -n
printf "Select AVD: "
read index
avd=$(emulator -list-avds | sed "${index}q;d")
echo "Selected: $avd"
$emulator_path -netdelay none -netspeed full -avd $avd
