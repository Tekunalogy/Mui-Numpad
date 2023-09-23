# Mui-Numpad
Numpad component using MaterialUI/MUI version 5.

## Demo



## "Installation"
Add it as a submodule into your `components` directory (or you can clone it).

```
git submodule add https://github.com/Tekunalogy/mui-v5-numpad Numpad/
```

To update the submodule if there are updates in the future:
```bash
cd # [directory in which your submodule folder is located]
# example
cd YourProject/src/components/
```
```
git submodule update --remote Numpad/
```

### Example Project Structure
```
├── YourProject/
│   ├── src/
│   │   ├── components/  <-------- You can add in this folder
│   │   │   ├── Numpad/  <-------- Resulting component added
│   │   │   ├── other_component/
│   │   ├── pages/
│   │   ├── other_folder/
```

## Usage
```tsx

import Numpad from "../components/Numpad"

const Page: React.FC = () => {
  const logValueToConsole = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <Numpad
        btnWidth='100px'
        btnHeight='90px'
        btnFontSize='38px'
        btnGap={1.5}
        btnVariant='outlined'
        onChange={logValueToConsole}
        onKeyPress={logValueToConsole}
      />
    </>
  )
}

```

## Props

| Name        	| Type                                     	| Default     	| Description                                                                                                                        	|
|-------------	|------------------------------------------	|-------------	|------------------------------------------------------------------------------------------------------------------------------------	|
| onChange    	| func: (value: string) => void            	|             	| Callback fired when the final value is changed.                                                                                    	|
| onKeyPress  	| func: (value: string) => void            	|             	| Callback fired when the button is pressed.                                                                                         	|
| btnWidth    	| string                                   	|             	| Button width                                                                                                                       	|
| btnHeight   	| string                                   	|             	| Button height                                                                                                                      	|
| btnFontSize 	| string                                   	|             	| Font size for text in the buttons                                                                                                  	|
| btnGap      	| number                                   	| 2           	| Gap between the buttons                                                                                                            	|
| btnVariant  	| ButtonVariant: "contained" \| "outlined" 	| "contained" 	| Mui Variant for the buttons. All numerical buttons will use this value, and the remaining two will be set to the opposite variant. 	|