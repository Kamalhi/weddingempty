import React from "react";

import { mrDafoe } from "@/lib/font";

const SendGift = () => {
  return (
    <section className="relative w-full mx-auto h-screen overflow-hidden">
      <div className="h-screen bg-[#D9D9D9] flex flex-col items-center gap-5">
        <div className="relative w-[380px] md:w-[450px] px-3 flex justify-center items-end">
          <p
            className={`${mrDafoe.className} lg:text-[2.8rem] md:text-[2.5rem] text-[2rem]`}
          >
            Send Gift
          </p>
          <div className="flex-1 h-[2px] md:h-[3px] w-full max-w-[300px] -translate-y-[8px] md:-translate-y-[10px] ml-[-3rem]  bg-black rounded-full"></div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="rounded-md bg-[#ffff] w-[380px] h-[180px] flex flex-col pl-10 justify-center gap-2">
            <svg
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" fill="url(#pattern0_26_85)" />
              <defs>
                <pattern
                  id="pattern0_26_85"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_26_85" transform="scale(0.00195312)" />
                </pattern>
                <image
                  id="image0_26_85"
                  width="512"
                  height="512"
                  preserveAspectRatio="none"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAF9lJREFUeJzt3WmMXed52PHnPffODDlDSpQlUhJlSY6TyG6kJLI2cmRZi7UAdZzESFMVDdI0Rbq5KYI2CIq0+diiLZAERZACSWMkjdG4AZzWbVygQWUr1spFFEVJtmRLlrVRIqmVFCUuw7n3vP0wojZS5Mzc5dw77+/3SZzlzANo5jz/e+6dMxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjLQ37C+Zv3bgmVh29JFI+O+pqXVT1moiYGPYcUIrndq69an4+rf7g2+s62m+8enjTyT5ncjLP/eR1hx8c/HRQqupw5DgYKV6J1P1+zBy6M21+6uAwJxhoAORv3diOyWNXR1XfFClfHzn9WERcOMivCbzfw//n7DjyZuuEt+ec4+XX9530cybarfip2w8PejTguBQRVZqPFK9Fq9oeVfWVeG3n19Lt0R3Ul2z3+4A5R4qts9dHyn8/4ujPRcSZC+8Y+sUGABgPOSK6eSIizotO92cjuj8bMz9R5ztaj0a0fzfdtuPP+v0l+7aV85bZ1RHxK5Hyr0fED/XruEBvXAGAFaCVjka7/afRXvsv0013He3HIateD5Afu3Qyb9v0G5HyM5Hy74flDwD91c2rYm7+n8aR/W/mO674r/mrcWLVL1FPAZC3zN4Qb5zxUOT02xFxbq/DAACnUOd2HOv8cqy9/GC+84p/0MuhlhUA+ZGfmMlbN/9JpHxXpHxpLwMAAEvUrafjSOdP8h2Xb3v7KfglW3IA5K2b/0Ycnt4WET2VBwDQo2P1pnjjyCv5rz91w1I/dUkBkLdu/pmIeDAiLlvqFwIABqBbz8TR+lv5zsv/0VI+bdEBkLfM/lJE/M+ImF7qbADAANU5xZH6j/I3rvh3i/2URQVA3jL7zyPlP40B3DcAAOiTuc5v5W9c8duL+dDTBkDeMvt3I+XfiwZuGwwALNGxzm/kb1z5m6f7sFMGQN626dZI+cun+zgAYETkiDg2/+/zX19x+6k+7EMXe9626aOR038Pf6gHAMZLjhRH6z/Ld1/9oX9/56QBkL91Yzty+vOIOGdgwwEAg1PXE3FkfsuHvfvkVwBWH/nXEXHdoGYCAIagU3803/GpL53sXScEQL7/2osjp9O+eAAAGAOd+lfyHZf/6AfffOIVgKr+z+F3/QFgZahzipz+1wff/L4AyFs33xgRnx/WTADAEMx3L813X3nbe9/0wSsAvzXEcQCAYTnS/f33/vOdAMhbZq+JiFuGPhAAMHid+pJ859XXHv/nu1cAUv5iIwMBAMNRd/7j8f+sIiLyg1dOR8TfamwgAGDw5uvZnBd2/8IVgE775yJibZMzAQADVud2fPPKX404HgA5/XSjAwEAw5HrX4yIqHKOFBE3NDwOADAM3XxZREQVW2cvi4hzGx4HABiGup7O915zSRUR1zQ9CwAwJDki5uqfryLik03PAgAMUa6vrCLlTzQ9BwAwRHVcUkVOH296DgBgiHJ9XhUpn9n0HADAEOVYVYUbAAFAYfJEFREzTY8BAAxTalUR0W56DABgiHJO1ek/CgBYaQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgQQAABRIAABAgdoREW+93o65t1pNz8IIqqqIyek6ps+aj5SangZYjLqOOPDaRMwd9RiPE62ermPd+s5CAOx+ZE0c2DvZ9EyMsImpHOd94nBs/OThqNq56XGAkzhyqBUPb18dr77ciW7t55STW7NmKm75wtsBcNSjf05jfi7F7kdn4rXnp+KTNx6Iqem66ZGA93hl72Rsu6cd3e5806Mw4ubmFs7fVc4Rc4dcJmJxDh9ox2N3fEQ0wgh5ec9UbL27Fd1ut+lRGAPznTrqOqKae6sVufbkLos3d7iKx795lgiAEfDynqnYdk8Vde2qHIuUcxzc34rKSZzlEAHQvH0vTlr+LMv+19pVdfRNJ3CWRwRAc/a9OBkP3Nuy/FmWN1+vopo75OTN8s0druLxO9eF7yMYHsufXr31VkrVvN8TpUdzh1rx2DdcCYBhsPzph2PHUlSdOS8ApHeeDoDBs/zpl/ljEVXnmCsA9IenA2Bw9r04GQ/cY/nTH3UnR9WdFwD0j6cDoP/eeeSfLX/6o1PnqMQk/ebpAOgfj/wZiBxRuQkQgyACoHfvLH+P/OmzXEe0L/rJt6LbEQG8qzOXYve3Z3q+Q+Tx1wRcesuBmJpxi1JYin27J+OB+6u+LP+UUpy/sRWtlnM9C9oTdW6f87GjTc/BCJpe140n7z0zer3qePw1AT92y/5YtUYEwGLse3EyHrivP4/8U6S4/OqIi3/kUB8mY8WoUu0VgJzUWRfMxSWfeSOqPnyHeDoAFq+fl/1TpLj8moiLf8QDPU4kAPhQIgCGy/JnmAQApyQCYDj27bb8GS4BwGmJABisfbv7/Jy/5c8iCAAWRQTAYFj+NEUAsGgiAPqrr7/qZ/mzRAKAJREB0B/vLP8693wsy5/lEAAsmQiA3lj+jAIBwLKIAFievZY/I0IAsGwiAJZm7+7J2GH5MyIEAD0RAbA4lj+jRgDQMxEAp2b5M4oEAH0hAuDkLH9GlQCgb0QAvN/e3VOWPyNLANBXIgAW7N09FQ/cnyx/RpYAoO9EAKU7vvyz5c8IEwAMhAigVJY/40IAMDAigNJY/owTAcBAiQBKYfkzbgQAAycCWOleeGYqHrjP8me8CACGQgSwUr3wzFTs3JYiZ8uf8SIAGBoRwEpj+TPOBABDJQJYKV54ZpXlz1gTAAydCGDcLSz/sPwZawKARogAxpXlz0ohAGiMCGDcWP6sJAKARokAxoXlz0ojAGicCGDUWf6sRAKAkSACGFW7n56y/FmRBAAjQwQwanY/PRUPbferfqxMAoCRIgIYFZY/K50AYOSIAJpm+VMCAcBIEgE0xfKnFAKAkSUCGDbLn5K0mx4ATuWsC+biRz/9Rjx5/xmR69TTseYOV/H4neviE585GK3Juk8Tjr7l7LIcEUcOlRVLL704EY/sTJFz798bKaX41DURF/2w5c/oSnnr5t5TFwZs/4tT8eS9Z0Zdzt4euJxzvPz6vqbHWHE88mcsVKnrKQDGQj+fDoBBsfwZJ06njA0RwCiz/Bk3TqWMFRHAKLL8GUdOo4wdEcAosfwZV06hjCURwCiw/BlnTp+MLRFAkyx/xp1TJ2NNBNAEy5+VwGmTsXfWBXPxw5sPNj0GhUixcJMfy59xJwBYEdacM9/0CBTi8msiLrL8WQEEAMASbLx4rukRoC8EAAAUSAAAQIH8NUCKtubs+Tjz3DJfP5C7OdLT5Z4CXn81Yr7TaXoMaEy5P/0QEWvP6cRFl7/V9BjNyDku/tiRpqdozDe/vjbmC/1fDxGeAgCAIgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAACiQAACAAgkAAChQu3MsNT0D9Kzr+xhgSdo7/sf6pmcAGBv/72urI/QmY67dSq1200MAjJNOt9v0CNCznFteAwAAJRIAAFAgAQAABRIAAFAgAQAABRIAAFAgAQAABRIAAFAgAQAABRIAAFAgAQAABWqffdFc0zNAz7qdFAf2TDY9BitcihSttsdNjL92K0X7kuveaHoO6NnRt1qx6+tnNz0GK10V8fnbDzc9BfSuSl0pCwAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFajc9ADRp/57JOHbkzKbHaERd59jzTLmPAY4c6TY9AjRKAFC0o2+24uibrabHaETOOQ4e3N/0GEBDys1/ACiYAACAAgkAgMXKES/vmWx6CugLAcDYyzli9yMzTY9BAXLOsf2eVry8Z6rpUaBnAoCxlnPEU1vOiFefW9X0KBSiW9ex/Z5KBDD2BABja2H5n2n5M3QigJVAADCWco54ausZ8epzTsA0QwQw7gQAY+ed5f+sR/40SwQwzgQAYyXniB9ss/wZHSKAcSUAGBvHl/8rz1j+jBYRwDgSAIwFy59RJwIYNwKA0ZeT5c9YEAGME38MiNGWUzy1bW3flv/UTDcuvWV/TM3UfTneOHjsznVx8KWl3b2u1WrHLZ8/OqCJRtMrL7Xi4e2tqHNv3xvHI2DT9ZOxYeOxPk0H/ScAGF054ukda/q3/KfruPTmA0Ut/+VKEbF6pqw/l3vRx7vRnpiIHfe1Iufc07EWIqAVm66fig0b5/o0IfSXpwAYTTni6R1r46WnVvflcFPT9cIj/zVlLTWWZuOF83H1dd1IKfV8LE8HMOoEAKMnRzz9oOVPM0QApRAAjJbjy//7lj/NEQGUQAAwOnLEMzstf0bDxgvn4xoRwAomABgNby//fU9a/oyO80UAK5gAoHk54pkH11j+jCQRwEolAGjW8Uf+35/uy+EsfwZBBLASCQCa47I/Y0QEsNIIAJqRI559yGV/xosIYCURADTi+UfWxN4nXPZn/CxEQC0CGHsCgKF7/pGZePFxy5/xdf6Fx0QAY08AMFTPPzITLz4205djWf40SQQw7gQAQ/P8w2ssf1aU8y88Fpuvr6OqRADjRwAwFM8/ssZlf1akcy84Fps+IwIYPwKAgVu47G/5s3Kde8Gx2CwCGDMCgIHa/ajn/CnDBhHAmBEADMzub8/EC9+x/CmHCGCcCAAGYvejM/HCty1/yiMCGBcCgL7b/ahH/pRtwwXHYvP1XRHASBMA9JXL/rBgw8Z5EcBIEwD0zZ7Hp132h/fYsHE+Nt/QEQGMJAFAX+z57nQ89/CavhzL8mcl2XB+RwQwkgQAPdvz3el4bpflDx9GBDCKBAA9sfxhcUQAo0YAsGyWPyzNhvM7MXu9CGA0CACWZe/3LH9YjvUbRQCjQQCwZHu/Nx3PPmT5w3K9GwG9n4JFAMslAFiSvU+stvyhD0QATRMALNreJ1bHszvX9uVYlj9ErN84H7M3zIsAGiEAWJSFy/6WP/Tb+vM7MXujKwEMnwDgtF56anU8u2tNRO79WJY/nGj9efMigKETAJzSS0+tjqd3rLX8YcAWIsDTAQyPAOBDWf4wXOvP64gAhkYAcFIv/2B1PL3DZX8YNhHAsLT3Pbk6up3eb0jByjF/pBV7n1zdn+U/011Y/jN17weDQqw/rxOz16fYek8r6rq3H8TjEXD+R2cihXM9C1qtqNp7vjsdc4daTc/CCjQ1XcelNx+w/GEZ1m+cj9kbc2y9ayLqurefoW5dxwvP+znkXa2qlarU6sPDPPgAl/2hd/18OgDeq6qS7yv6z/KH/hEBDErVarsCQP9Y/tB/68/rxOxN/blPAEREVK0UVXvK80L0h+UPg7P+3HkRQN+0FwLAFQB6Z/nD4IkA+qU9kaKacAWAHk3NdOPSW1+3/GEI1p/bv9sGU66JyRzVKidteuBX/WD41p83H9e6EkAPZtbkLABYNpf9oTnnnCsCWL6163JUq9Y6ebN0lj8075xz5+PTn+1EqyUCWJqzzu7kamqmDgHJUlj+MDrO3rBwJUAEsGgpxRkf6eQqUnYiZ9FmPjIfl91m+cMoOXvDwpWAdttt3Tm9iVYrJibrhb8G6GkATmfVGZ342JVvxo/fdiAmp32/wKj5yPr5uPVnjsR557ejcjWAU5iYXPijUO2IiB+66s248Md9w3ByE6u7Mbnaq/xh1E2tyrH5pkOR64gDr7fi6JF20yMxglatnouItwNgaqYbUzMe1QGsBKmKOOucbkQ4r/NhUnjYDwAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFEgAAUCABAAAFqiJivukhAIAhSilXEfFW03MAAMOUuwIAAMpzrIqI/U1PAQAMUUpHq0j56abnAACGKKV9VeT0RNNzAABDlOKJKiK+1/QcAMAQVdVDVeS0rek5AIAhSRFxbOqrVbp26/ci4sWm5wEAhqBKh9Lntvzg+J0A7250GABgOFrpOxHv3gr4LxscBQAYltT6csTxADi66uuR8oFGBwIABquqOrF/5x9FvB0A6aa7jkZOf9HsVADAQLXTlnR7dCPe+9cAc/qDiMhNzQQADFg3fvP4f74TAOnarbsi4q8aGQgAGKyJ6on0N3dtPf7P6n3vTPnfDn0gAGCwUkS0W7/23je9LwDS5u3bIuX/PdShAIDBalffSTfvvOO9b6pO+KCq/rXwJ4IBYGVIqY526wsffPMJAZCu2bE7IjwVAAArwWT643Tzzh988M0nXgGIiNi87Xci4puDngkAGKB2tSduefifnOxdJw2AlKKOlH8xcto72MkAgIGoUie66dqUTv4r/ie/AhARafP2lyLlX4iIuYENBwD0XxU5ptIvpJ/a9dyHf8gppNltd0XKfydi4a5BAMAYmKj+Vbr54VPe4feUARARkTZv/8vI6VfDXQIBYPRNtf9TuvXh3zndh502ACIi0rVb/0tE/L2ImO91LgBgQCZb/yHd+tCvL+ZDFxUAERFpdttXIuUvhHsEAMBoSZFjsvXFdNuuf7PYT1l0AEREpM3b/290W1dFxKNLHg4A6L9WdShWt25Kt+36w6V82pICICIiXXf/EzExPxsRXwqvCwCAZqSImGztiE5rQ/rsrruX+ulLDoCIiHTVzsNpdts/jqq+ISK+s5xjAADL1KoOx1TrH6bbdl2Tfnrn4eUcYlkBcFza9MC9MTF/RaT8LyJiTy/HAgBOo0qdmGx9Oda31qVbdv1xT4fqdZZ01c75tHn778X+sz4eEf8sIk643zAA0IMqzcVU9aVYN31Gum3XL6erdvb8W3ntfswVEZE+91dzEfEHOccfxvZNn46cfikifj4izurX1wCAYqSoo93+drSr3003P/jf+n34vgXAcQv3HN5+X0Tcl7/6t78YH33hyqjqz0ZO10fEpRFxYSy8dAEAiFjYiil1olW9GlFtj3Z8JV7b+bV0++DuxDv0RZwfvHI6jk1+IlI+O1JeFzmtiZQnhz0HlGLv4zOXzB2u1p74ntw++OqR2ZN9TtWOzmWbDz8y6NmgWLk6HBFvRIpXI8X3Y27izvS57QebHgsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGCc/H9YXTLYJXu4pQAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
            <div className="text-[12px] md:text-[15px]">
              <p className="italic font-[300]">No. Rekening</p>
              <p className="italic font-[300]">A/n Pemilik Rekening</p>
            </div>

            <button className="flex gap-2 items-center justify-center w-[180px] h-[30px] bg-[#3C3C3C] rounded-md text-white cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
              <p className="italic text-[10px] md:text-[12px]">
                salin nomor rekening
              </p>
            </button>
          </div>
          <div className={`${mrDafoe.className} text-[20px]`}>OR</div>
          <div className="rounded-md bg-[#ffff] w-[330px] h-[160px] flex gap-5 items-center justify-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" fill="url(#pattern0_26_98)" />
                <defs>
                  <pattern
                    id="pattern0_26_98"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use href="#image0_26_98" transform="scale(0.00195312)" />
                  </pattern>
                  <image
                    id="image0_26_98"
                    width="512"
                    height="512"
                    preserveAspectRatio="none"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <p className="italic font-[200] text-[10px] md:text-[12px]">
                Scan QRIS
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-[200] italic">A/n</p>
              <p className="font-[300]">Nama penerima</p>
              <p className="font-[200] italic text-[10px] md:text-[12px]">
                Terimakasih, semoga berkah.
              </p>
            </div>
          </div>
          <div className={`${mrDafoe.className} text-[20px]`}>OR</div>
          <div className="rounded-md bg-[#ffff] w-[380px] h-[180px] flex gap-3 justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 16V29.3333H5.33337V16"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 9.3335H2.66663V16.0002H29.3333V9.3335Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 29.3335V9.3335"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 9.33317H9.99996C9.1159 9.33317 8.26806 8.98198 7.64294 8.35686C7.01782 7.73174 6.66663 6.88389 6.66663 5.99984C6.66663 5.11578 7.01782 4.26794 7.64294 3.64281C8.26806 3.01769 9.1159 2.6665 9.99996 2.6665C14.6666 2.6665 16 9.33317 16 9.33317Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 9.33317H22C22.8841 9.33317 23.7319 8.98198 24.357 8.35686C24.9821 7.73174 25.3333 6.88389 25.3333 5.99984C25.3333 5.11578 24.9821 4.26794 24.357 3.64281C23.7319 3.01769 22.8841 2.6665 22 2.6665C17.3333 2.6665 16 9.33317 16 9.33317Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={`${mrDafoe.className} text-[14px] md:text-[16px]`}>
                Kirim Hadiah
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="font-[200] italic text-[10px] md:text-[12px]">
                A/n
              </p>
              <p className="font-[300] text-[12px] md:text-[14px]">
                Nama Mempelai Putri
              </p>
              <p className="font-[300] italic text-[12px] md:text-[14px] max-w-[240px] text-wrap text-center">
                Jl. xxxx, Kel. xxxx, Kec. xxxx, Kota/Kabupaten xxxx, Provinsi
                xxxx
              </p>
              <button className="w-[170px] h-[30px] rounded-md bg-[#3C3C3C] text-white flex items-center justify-center gap-1.5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                  />
                </svg>
                <p className="italic text-[10px] md:text-[12px]">
                  salin alamat
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendGift;
