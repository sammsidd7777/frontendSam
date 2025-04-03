import React, { useEffect, useState } from 'react'
import Navbar from '../components/smallComponents/Navbar'
import Footer from '../components/smallComponents/Footer'
import { BellRing, ChevronRight, CircleHelp, Headset, LogOut, Mail, MapPinnedIcon, MoveLeft, MoveRight, PackageSearchIcon, ReceiptText } from 'lucide-react'
import AddressUpdationForm from '../forms/AddressUpdationForm'



const MyAccount = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_PORT;


  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");

  const [OpenAddess,setOpenAddess]=useState(false)

  const checkUserLogin = async () => {
    try {
      // Attempt to fetch user information
      let response = await fetch(`${backendUrl}/user/h`, { credentials: "include" })
      if(!response.ok){throw new Error(error);
      }
      let data= await response.json()
      console.log(data)
      setusername(data.message.name)
      setemail(data.message.email)
      setphoneno(data.message.phone)

    
    } catch (error) {
      console.log(error.message)
      // alert("something went wrong")
    }
  };



  const OpenAddessFrom =()=>{
    console.log(OpenAddess)
    setOpenAddess(!OpenAddess)
  }

  useEffect(()=>{
    checkUserLogin()
  },[])



  return (
    <div className="myprofile-page">
      <Navbar />

<div className="myprofile-sections">

      <div className='myprofile-first-section'>
      
          <p>Home <i className="fa-solid fa-chevron-right"></i></p>My Account
       
        
      </div>


      <div className='myprofile-second'>
        <div>

          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAENAQ4DASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAQQHAwII/8QASBAAAQMCAgYGBwMJBwQDAAAAAQACAwQRBSEGEjFBUXETImGBkaEUMkJSYrHBI3LRJDNDU4KSorLwBzVjdIPh8URzk8I0VKP/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADERAAICAQMDAgQFBAMBAAAAAAABAgMEERIxBSFBE1EiMmFxFCOBkaFCUrHBM0PR4f/aAAwDAQACEQMRAD8A62iIgCIiAIiIAiIgCL5JABLiAALknIADeSVDVmkFFBrMph6RILjWadWEH7+09w71shXKx6QWpqsuhUtZvQm1o1OKYZS3EtQwvF+pH9o/kQzZ3qpVWK4lV3Ek5bGf0cPUZbgQMz3krR2Kxr6d5m/2Km3qi/61+5ZZ9JmZimpSeDp3W/hZf+ZR8uPYxJfVmZEDuhjaPN+sfNRaKdDEphxEr55t8+Zfse8lbiEt+kqqh3YZH28AbLwJJzJJ5klEUiMVHhEWUnL5nqERFkYmQ57SC1zmkbC0kEeBWzHiOJxW1KyoFjkC8ub4PuFqosHCMuUZxnKPysl4dIcVj/OGGYf4keq7xjI+SkoNJaR1hUQSxH3oyJG8yMneRVWRR54dM/Gn2JUM6+H9Wv3L/T1tFVAGnnjk4tDrPHNh63ktlc3BIIIJBGYINiORGalKXHMSptVr3iojFrtmJLrdkgz8bqDZ0+S7wepZVdUi+1i0LoijKLGcPrLMD+hmOXRzEC5+B2w/1kpK6rZwlB6SWhawsjYtYPUyiIsTMIiIAiIgCIiAIiIAiIgCJ3LFwL7LC5PYgMqOxDFqOgBa49JPYFsLD1s97zsA/qyjMTx+xfT0Dhva+oGduIiv8/Diq2SXFznElziXOJNySdpJOassfCc/is7IqMrqCh8FXd+5uVuJVtcT0z7RX6sMdxGOY3nmtNEVxGEYLSK0KKc5WPdJ6sIiLMwCIiAIiIAiIgCIiAIiIAiIvAFK0GN1tHqxyEzwCw1Xu+0YPgefkfJRSLCdcbFpJam2u2dT3Qehf6Stpa2PpKeQOAtrtOT2E7nNWyudwzT08jZYJHRyN2Ob8iNhHYrZheNQ1urDNqxVWwDYyXtZff2KlyMOVXxR7o6DFzo3fDPsyYRYWVALIIiIAiIgCIiAIiwf6ugMOc1oc5xAa0FznONg0AXJJKqWLYy6rL6emJbSgkOdmHT89+rwH/CYzixq3Gmp3fkrD13D9O4b/ujd4qGVxiYm38yfJQ5ubu1rrfbyxkiIrUpgiIgCIiALDnMjaZJHNZG31nyODWjmTko/EMVp6HWiYBNVWzZfqRf90jO/YPJVipq6qrf0lRK55Hqg5MYODGjIeChX5cauy7sscbAnctz7IsVRj2HxXbC2Sodsu37OP95w1v4VHSaQYg6/RR08QOyzDI7xebeSh0VZPMtl50Livp9EPGv3N84zjDv+reOxjI2jyasDGMXH/VyH7zYyPNq0UWn1rP7n+5I/D1f2r9iWjx/E2ka4p5R8ceqfGMhb8GkFI8htRDJEfejPSM7xk75qtItsMu2Pk0zwaJ/06fYvcU0FQzpIJWSs3lhvb7w2jvC9FQ4ppoHtkhkdHI3Y5hseRVjw/G45y2Gr1Y5TYNlGUbzwcNgPlyVlTmxn2l2ZUZHTp1fFDuv5JlERTirCIi9ATYQQSCCCCNoIzuCiIC0YPjXTalLWOHTGzYpTkJfhf8XDjz2z91zhWnBMX6fVo6p95wLQyOOcrR7JPvDz57abLxNv5kOC+wc3d+XZz4ZPoiKrLkIiIAiIgMXVdx/Ey3WoKd2ZH5U5p2A/oge32vDflJ4rXtoKZzwR08hMdO02PWtm4jgNv/KpBc5xc5xLnOcXOc43JJNySVZYWPvfqS4RU9Qyti9KHL5+xhERXZzwREQBERAFFYtihox6PTu/Kntu94/QNOy3xHdw278t2tqmUVNLUOALm2bE07Hyu9Uct55KmtFTV1DGMa+aqqpgxjW5vllkOwf18lX5mR6a2x5Za9PxVa/Unwv5PIkm5JJJJJvmSTvKL7limglmgnjfFNC8xyxyAtexw3EFfCpPqdGEREAREQBERAERYOVtpJIa0AEuc45BrQMyTuFkBYMHxU3jo6l1wbNp5HG5B2CN5P8ACe5WBUappayimdT1cEkE7WxvMcgs4Ne3WacsvPzCs+EVxrKbVkN54LMlvtcPZf37+0K3wsnd+XJ/YoOo4ih+bD9SSREVoUwREQBAXAhzSWuaQ5pabEEZggoi8PS6YPiQr4S2QgVMIAlA9sbBIB27+1Si57S1M1HPFUResw5t3PYdrDz/AK2K+U88VTDFPEbslaHN4jsPaNhVBmY/pS1jwzpcHK9aG2XKPZERQixCwSBckgAZknYAN5WVD4/Wej0nQMNpaslmW0RD1z35DvWdcHZJRXk122KqDm/BXcUrTXVckgJ6Fn2cA+AH1u/b/wALRRF08IKEVFeDj5zdknKXLCIizMAiIgCIsi1xc5DN3IZleHpWMfqTJUx0zT1KZgLx/jSAE+AsFY9A8Jbq1ONTNu5zpKSg1h6rGm00re0nqjsafeVGqZpJ5amfbJNI97Rxc93VHyC7VhtGzDsPw6hYABS00MJtveGjXd3m571yHULnJt+/+DtsOlVwUfY08Y0fwrGmA1LDHUsbqxVcFmzsG5rr5Ob2HusqBiWh+kFAXuhiFdTi9pKMHpQPjgd1/DWXVkVbXfOHZcE2VakcHddjzG8FkjSQ5kgLHgji11neSLuFTRUFY3Vq6WmqG7hURMktyLgSoabQ3RSa9qF0JOf5LPPEO5usW+SlRy4+UaXS/ByhF0t2gOjxPVqMTYOAnid/PESsDQHR8banFHDh00Lf5Ygtn4qs89KRzVYLmghpcNY+q293OPY0ZrqsOhOikWbqWef/ADNVO4d7WOaPJTFJhmE0FvQqGkpzs1oIWNf3vtreawllx8I9VL8nLMP0Y0jxIsdHRupoHWPpFeHQssd7YyOlP7ver9gmimFYOW1DiavEADapnaAIr7RTx5hvO5PbuVhRRbMic+3BtjUolX0zwltdhjq2Nv5XhrTLcDrSUpP2jDy9YcjxXPcKqfRq2BxNo5T0EvDVebA9xsV2ktY8OZI0Oje1zJGnY5jhquB5hcQrqV9DW19ESdalqZqcHeejeQ13hYqZg2uP6EfJqU04vhl34ovGlm9IpqWbfLDG8/eIz+q9l2aeq1Rw0ltbTCIiyMQiIgCndHq7opnUUjvs5yXw39mUDNvePMdqgllrnNc17HFr2Oa9jhtDmm4K03VK2DizdRa6ZqaOjotWhqmVlLBUNtd7euB7Mgyc3xW0uZacXozr4yUkpLhmFSMYqvSq+cg3jhPQR8LMJue83VtxCo9EoqucGzmRkM++7qN8yqErPp1erc39in6pbolWvPcIiK5KIIiIAiIgC8at5jpK542tppyOZYW/Vey1cR/u/Ef8u75hYT7RbNla1nFfVFYweAVOL4HTOF2yYhS6w4tjeJT/ACrtW3PjmuSaIsD9JMIv7Hpkve2nkA+a62uFy3rJI72ngIiKEbwiIgCIiAIiIAiIgC5TpnCIdIK1wyFTDSVOXF0QYfNpXVlzfT9lsUw2T9ZhrW97J5B9VLxXpPQ03cHzgj9bDab4HTR/uyOspFRWA/3eP8xP8wpVdxjvWqP2OGylpdNfVhERbyMEREAREQE/o3VastRRuPVkHTxffbZrh3ix7laVz2lnNLU01QP0MrXO7WbHDwuuggggEG4IBHIqiz69lm73Oj6bburcH4IDSafVp6SAbZZXSu+7GLC/efJVdTGkMvSYhqboIImftOvIfmFDqyw4baV9e5U50998vp2CIilkIIiIAiIgC8K1uvRV7feppvJpcvdSeF0EVUJZJ260btenja4dUlzdVziOy+Si5d8MepznwSsWmd1sYQ5/8KfoWAdIqLspa8j/AMYC6suU6HtdDpNSRPycyHEYHD4mRkEeS6suKyvn/Q7ingIiKIbgiIgCIiAIiIAiIgC57/aCB6Xgp3+h1A8Jl0Jc7/tCeBW4Rc5MoJ3nkZj+ClYv/IjVb8p4YG22G059987/ABkcPopJbdPhbKfAcJc1urPBQ0zp/j12h7iRxBK1F2WDfC+pOHjscXn0Tque/wA9wiIpxACIiAIiIArxg8xnw6jeTdzWdC/jrREsz8AqOrPozJrQV0F845mSjlI230Vfnw1q19iz6bPbdt90QeJydLiFe+9wZ3NB7GWYPktRZJLnOcdriSeZWFNhHbFR9ivnLfJyfkIiLMwCIiAIiIArFhNhRQ229JNfnrlV1TWCygsqIDta8St+64ap8x5ql61BzxdV4af+v9lx0eajkpPymiIiwHE6PSynxWKFsmHVFZVSOdE8F9OKiGQHpWGxtrHIi+3crqviPYRwPzXouRdjmk2deo7QiIsT0IiIAiIgCIiAIiIAqXpPgOK45jVEIImsoIKGnjqamZ4bHnNJJIyNou4usbbLZ7VdF8Pyae3JZxsdfxIxlHd2NOp1RS1mVmimmAHABhACqqseKSiKjkb7U7mxNG+19Z3y81XF03QYNUyk/LOX65NSujFeEERF0JQhERAEREAU1o7OyGrqg91mPpwf2mPFvmVCr6Y90ZJabEiy1W1qyDg/JtpsdU1NeD54oiLaagiIgCIiAIiIAvamnfTTRzNF9U2cPeYciF4osJwU4uEuGZQk4SUo8ouNPLHK1kkbg5kjbtP058VsKm01XUUr2vjkeGB7HyMB6rwDmCOSuLS1zWuabtcA5p4gi4K4jNwXhyXfVPg7bCzllp9tGuTKIirywCIiAIiIAiIgCIiALylItmQAAXOJNgAN5K9VWMVrJZqqohbI70eNwjDGnquczJzjbbndTMTDllz2RenuyHmZccWG9rX2PHEKoVU92X6GIFkV9+dy7v8AwWmiLuaao01quHCOIttldN2T5YREW01BERAEREAQIiA9J43Qz1EJ2xSvj/dNl5qQxmPo8TrQBk9zJR+2wE+d1HrXXLdBS90bbYbJuPswiIthqCIiAIiIAiIgCsuC1HS0nQuPXpjqdpjObD8x3KtLaw+q9Eqo5D+bf9nN9xx292RVf1DG/EUNLld0T+n5H4e5SfD7Mt6LHy3ELK4U7lBERAEREAREQBEWF6Dxq6gUtNPP7TG6sd98rsm/j3Km57Sbk5kneVLY3VdJM2lYepTkmS2wzEWI7hl3lRK7HpON6NO98y7/AKeDjeq5HrXbVxHt+vkIiK4KkIiIAiIgCIiALbw+ldWTvibtbE6Twc1v1WorBoxGDNiEx2MjhiHNxc4/ILRfY663NeCRj1eraoe586Sw6tRST2ylhdGecbr/AFUCrhpBB0uHukAu6nkZL+yeo7537lT1pwp7qUvYkdQr2Xt+/cIiKaV4REQBERAEREAREQFjwat6aL0aQ/awj7Mna+L8W7FLf7qp4Xf02Ig2cI5rc9VWiKVsrbjJwNnt90rieqVRqyWo+e52nS7pW463eHoeiIiqy0CIiAIiIAtTEKwUVO6TLpn3ZTjb197iOA/Ditl72RtL3mzR4nsHaqxi0r5aiNztnRWaPdGsclPwKI35EYS4IOfdKiiU48keSSSSSSSSScySc7lERd0cMERF6eBERAEREAREQBW3RyHUoHykZ1E8jx91lox8iqib26oJdsaBtJOQC6DR04paWlpx+hhYw23uAzPiq3qE9K1H3Lbpdetrn7f7PWWNs0csT82SsdG77rhYrns0T4JZoX+vE90buF2m1wuiqqaR0nR1EdW0dSoGpJ2SsGXiPkouBZtnsfkmdTq3VqxeCCREV2c6ERF6AiIgCIiAJx7Bc32AcSSterraWiY187jd9+jjYLvktkbXyA4n5qtVuKVdbdhIjg3Qxk6p7XnaT/VlGuyIVduWTMfEnf3XZe5bcIxOklxmko6e8rnxVZfK3803UjLrN3lWiQvhkE0ex3rDcTwPNc60OcG6TYL8RrI/3qWX8F1mopA4OLBt9ZnH7q5PqUZ32eqvY6zBjDHh6aNeGeOYdU2cBdzTtC9VFPjkhdcEjPquGRHYV7R1sgsJG63aMnfgqhS9yx0N9Frirpjtc4c2n6IaumHtk/dafrZZanhsL4kkjibrPdYbhvdyC1H1x2Rst8T8z3NGS1Hvc8lz3EneSVi5Huh6TTvmNzk0eq0bB/uq3jOI09JXUsE4e1stI2ZswzbnJI2xG22W0XVwo8OMlpKhpDNrYzkXff7OxUDT9wOOQMAAEWG0rABsAMkzsvFWvT4TqsVpAzFC6t1M3mua5rXNcHNcLtc0gtI4gjJZVNo6+roj9k4GMm74n3Mbu2249oVlosRpq0EMuyZrdZ8T8yADYlrhkQutpyY2duGclkYc6e/KN1ERSiEERF4AiIvQERF4CQwem9KxGmaRdkB9Jk4Wj9UHvt4K8KD0dpOipH1Tx16twc3shZcN8cz3qcXP5lm+1peOx0/T6vTp1fL7halfSNraWenNg5w1oyfZkbm0/Q81trCiRk4tSROlFSTiznLmuY5zHtLXscWuadocDYgrCn9IaDo5BXRjqSlrKgAerJsa/v2Ht5qAXTU2q2Ckjkb6nTY4MIiLcaAi8ZamnhuHv63uM6zu/cPFaMuITOuIgI28Rm89+xR7MiuvlkqrFtt4XYkZJYoheR7W77H1jyaM1oy4jtbAy3xyZnubsWgSXEucSXHaSSSe8rCrrMycvl7FtT0+uHeff/Bo4jNJNO0yPc5zYwLuN7XJOS0l7VTtaomPAhv7oAXiobbb1ZYpJLREro3J0ekOjzuNfHH/AORj4/qu3LguHSiDEsInOyLEaB55CoZdd74961TNkTXmp2S3IsH24ZO5qKlpAHEZscNxzCnV5yxMlbZ23cRtCgX4yn8UOzJNdu3s+CvmnlGyx5G3zWOgn93zH4qRlifEbO2eydxXyxj5HarBc7+AHEqqaknt07kxNNao020sjiBcXJsALklSdNh8MREknXkBu2+bWHsHFbMMDIhcZvO130C9lZ0Y234p8kSy7XtEwuQ6cP19I69v6qGij/8AxEn/ALLr64ppTL02kOOvve1V0Q/0o2RfRWMOSLLghls0Uj46mNzHOa4h7QWmxzF1rL7hOrLE7g9vhey26tcGDSa0ZZosQkbYStDx7zcnd42Lfingm/NvBO9pycOYKgkvY32EbCMiFLry5w7S7orrcCufePZlhRRMVdPHYP8AtG/F63c5b0VXTS2AdqOPsvyPcdisa8mufnRlVbh21eNV9DYRPFFJIYWxR0r62qgpWg2ebyuHsQt9d30HNaxIAJJsALklW/AcPNLTmolbaoqg1xB2xxbWs57zz7FFyblVW35fBLxKPXsUfHkmGNYxrWMADGNDWgbAALABfSIucOsXYd6IiA85Yo5o5YpWh0cjCx4O8EKi11HLQ1MkD7ketE+35yM7Dz3FX5aOJYfFXwGM2bKy7oZD7LuB7Dv/ANlLxcj0Zd+GQM3F9eGq5RRSQASTkASewAXKh5q2ol1gHFkZ2NZkSO07fNSGKdLStkp5GlkznmNzTtDRmTyOVlDKbl3ttRi+xBwMdbXOaMLKIq4twg2osG9nW22NuaAh3u1nyO957neJuvlbXoM3vx/xfgs+gTe+z+L8F6emm5xYC8bY7SDmw6w+S/QUUgljikacpI2SA8Q5ocuASxtaXR67X3aQ4svYXytcrt2j0/pOBYDMTcvw6k1t/WbGGHzC1zMokoiKFxvG2YUxsbG9JVzMLomuB6Nrdmu8/S/gtM5qEd0uCRTTO+arrWrZ64xi1HhsP2gEs8rT0MANi7drvO5vb4dmrgWN01cwU8oZDWgXLRcMnA9qO5vfiL+WyjTzz1Msk9RI6SWR2s97tpO7ZlYbgvhrnNc1zXFrmkOa5pIc0jYWkZ3VM81+pvS7HXx6HX6Hpyfxe/8A89jrSyq1gOkBrTHQ1Z/K9UmOQDqztaLnWDRk4eB55KyhW9dkbI7onJ5GPZjWOuxdxw5rg2JzekYlis9/z1fWSjk6ZxC7pUzCnp6mc7IIZZjyYwuXAWAPLdd4brZlzgSLnPOykQIsjCXIz4Zrb9BkyIkYQcwQHWKegyfrGeDlsMDfBuAeIB8RdZXzG0tjjaSCWtDSRsNsl9Lw8CIiA94qqohya7Wb7j8x3bwphj2yMY9pye0OCgFOYBTz4jK6ijJAjIllltcRROOfZc+yPoFOxcjY9JvsVubi70pVruTWCYd6bUdPK29LTuBIIyllGYZyG0+CuQXnTwQU0MUELQ2ONuq0fUnid69VCyL3dPd48E7Fx1RDb58jvTvRFHJQREQBERAQOkOAsxaFssJayvgaRC52TZW7eikPyO7kVzaWOaGSWGaN0csTiySN4s5jhuI/rzXZ1B47o/S4uwytLYa5jdWKa3VeBsjmAzI4HaPI5Rl7mDj7HMUXvU0tVRTyU1VE6KeP1mnMEbnNIyIO4j/jxW0wCwsogPlzmMbrPcGtG88eAUfPVvkuxl2xnb7zh2lfFSZelcJHXI9Tc3VOywXivT0Lrugs4m0boGb6aaspj2asznDyIXIl0P8As/q3CgxikBsYq6OcW2hs8Iabd7CsJ8GS5L1NOGXa3N28+6oyspKauhdDUNLgTrNcPXjf7zDxWwi0uKktGbYTlCSlF6NFAxCgmw+oMEjmuBaJInt9uMkgEjccjcLxp6eeqnhp4A0yyuLW651WiwLi5x4AZqU0kfrYm5v6qmp2eIMn1WnhL+jxPDHcagMP7bXM+q52cIq7YuNT6JTdZLDVz+bbr/Bb8Nwymw2Itj68zwOnnIs95GdhwaNwUvDPezXnPc7jzWsi6GMVBbY8Hz222dsnOb1bPHSef0bR/HZONFLAOc9oR/MuJrqOm1U+PR90JP8A8mtpYRxLWa05v+6Fy5b4cGiR7Q1EkJA9Zm9p+hUjHLHKLsPMHaD2hRC+4ek6SMRkh5IAI3cSexZmJMIiLw8MLKLewvCa7F6joaVurExwFTUvBMUA4druDb87BD08qCgrcTqWUlIwGRwDpHuv0cEd7GSQjdwG/Zy6jhWF0mE0rKanBJJ15pXW6SaQixe/6DcMkwzCqHCaYU9KzadaaV9jJNJa2vIR5DYNy31qctTNLQIiLEyCIiAIiIAiIgCIiA0MTwqgxWHoaqPrNuYZmWE0LjvY75jYVzvF8BxHCHOdK3paQmzKqJp1OwStzLT5du4dTWHNa4Oa5rXNcC1wcLgg5EEHJep6GLWpxdFfMV0Opp9abDHNppTmYH3NM8/Da7m+Y7FTKyhxDD5OiraeSFxNmucLxv8AuSN6p8VtTTMGtCMrItdnSAdaPb2t3qOU2omoi6GQt9k9ZnI7l6DyVt0DmLMTxGnvlUULZAPiglH0cVUlN6KzCDSDCSTYTGopT/qwut5gI+D1cnV0RZaLuaOLgPNaDYUXG36+K4kdzZujH+mxrPotKnf0dRSSe5U07/CRpX3VydLV1st/zlTO/wAZCtdxs1x4Au8M1zM5fG5fU+m0V6URh9Ev4OlnaeZRfLHa8cT/AH2Mf+80FfS6VcHzNrR6MpOn832eB0oO11ZVOHLUib/7Khq06cz9JjUcIOVLQU0ZHB0mtOf5gqst8eDW+Qt+ii1QZnbXDVZ2N3nv/ratOKMyyMYNhzceDRtKl7NaBawa0DsAAXpiZWCQASSABvKkcOwbFsVLTSQWgJzqZ7spx907XdwPMK84RothmGmOeX8rrW9YTTNGpE7/AAY9g55ntWLkkEtSs4NorW4gY6iuElLRGzmsI1amdvYDm1vaRfsG1X+mpaWjgjpqWGOGCMWYyMWA7eN+JXui1t6mxLQIiLw9CIiAIiIAiIgCIiAIiIAiIgC+JYYZ43RTRxyRvFnMka17HDta7JfaICr1+huF1Gs+jfJRyHPVb9rAT/23G47nBVLFdEdIII3FtOKpsd3NfRnXJG8GN1n+AK6qiyUmjHaj89u6rixwLZASCx4LHi3FrrO8l70c5pazD6n/AOtV0055Mla53lddzq8Pw2ubqVtHTVDbWHTxMkI5Fwuq/V6BaKVIcI4amkLg4XpKiQAXFrhkus3yWW9Hm0mDtNtl8uSwXajXvOxjJHn9lpctgUYjjjb0rnajGM1nBt3aoDbm1hc8lo4heOhxNwObaOoI5mMhapPRNm2C3TUfc55e+fHPxzWCLgjjkvoDILByXLPufVNNOC/4a/pMPw1/vUkF+YYGlbYBJAG0mw71H6PtMmFYdc2s2Vo5NleApttM0EHXdcEEWA2jPeumqesIv6I+Y5S23zj7N/5OL6RVHpWOY3MDdvpssTT8MNoR/KoyCOaqkEVLFNUTH9HSxvmf3iMFdfg0L0The6WSiNVK6R0rn100s93OdrE6jjqfwqegp6amYI6eGKGMbGQRsjYP2WABSN6RF0OY4PoZj8zBJURx0IkILjUkPmDBsAhiO3fm4fhcsP0SwSiLJJmOrZ22OvV2MbXDe2EdTxB5qwosXJs90RgAAAAAACwA2AcAsoixPQiIgCIiAIiIAiIgP//Z" alt="" />
          <div >
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phoneno}</p>


          </div>
        </div>
        <hr />
        <div>
          <button >Home</button>
          <p>f-67 ali viahr sarita vihar new delhi 76</p>


        </div>
      </div>

       <div className='myprofile-thrresection'>

        <div onClick={OpenAddessFrom}><MapPinnedIcon   />Manage Address</div>
        <div><PackageSearchIcon />My orders</div>
      </div> 


{
  OpenAddess && (
<div className='Addess-from'>
<h1><MoveLeft />   Add a new address</h1>
<AddressUpdationForm />
</div>
  )

}

      <div className="myprofile-fourth">

      <h1>More</h1>



      <div><span><BellRing />Notification center</span> <span><ChevronRight /></span></div>
      <div><span><Headset />Help and Support </span> <span><ChevronRight /></span></div>
      <div><span><CircleHelp />FAQS </span> <span><ChevronRight /></span></div>
      <div><span><ReceiptText />Term & Conditions center</span> <span><ChevronRight /></span></div>
      <div><span><Mail />Get in touch </span> <span></span><ChevronRight /></div>


      </div>


      <button className='log-out-button'><LogOut />LOGOUT -  ACCOUNT</button>
      </div>


      <Footer />
    </div>
  )
}

export default MyAccount;
