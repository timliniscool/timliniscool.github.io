import
{
    j as i,
    a as e,
    N as r,
    T as s,
    b as o,
    A as t
}
from"./index-a5d2672e.js";
function d()
{
    return i("div",
    {
        className:"py-48",
        children:
            [
                e(r,{}),
                i(s,{
                    classNames:"flex flex-col space-y-4",
                    children:[e(o,{
                        className:"mb-8",
                        children:"Developer tools"
                    }),
                e(t,{
                    to:"/dev/providers",
                    direction:"right",
                    linkText:"Provider tester"
                    }),
                e(t,{
                    to:"/dev/embeds",
                    direction:"right",
                    linkText:"Embed scraper tester"
                    }),
                e(t,{
                    to:"/dev/video",
                    direction:"right",
                    linkText:"Video tester"
                    }),
                e(t,{
                    to:"/dev/test",
                    direction:"right",
                    linkText:"Test page"
                    })
                ]       
            })
        ]
    })
}
export{d as default};
