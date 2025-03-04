const incomecolors=['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expensecolors=['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
export const Incomecategories=[
    {type :"Business", amount:0,color:incomecolors[0] },
    {type :"Investments", amount:0,color:incomecolors[1] },
    {type :"Extra Income", amount:0,color:incomecolors[2] },
    {type :"Deposits", amount:0,color:incomecolors[3] },
    {type :"lottery", amount:0,color:incomecolors[4] },
    {type :"Gifts", amount:0,color:incomecolors[5] },
    {type :"Salary", amount:0,color:incomecolors[6] },
    {type :"Savings", amount:0,color:incomecolors[7] },
    {type :"Others", amount:0,color:incomecolors[8 ]}
]
export const Expensecategories=[
    {type :"Food", amount:0,color:expensecolors[0] },
    {type :"Travel", amount:0,color:expensecolors[1] },
    {type :"Clothes", amount:0,color:expensecolors[2] },
    {type :"Shopping", amount:0,color:expensecolors[3] },
    {type :"House", amount:0,color:expensecolors[4] },
    {type :"Entertainment", amount:0,color:expensecolors[5] },
    {type :"Phone", amount:0,color:expensecolors[6] },
    {type :"Pets", amount:0,color:expensecolors[7] },
    {type :"Others", amount:0,color:expensecolors[8 ]}
]
export const resertcategories=()=>{
    Incomecategories.forEach((c)=>c.amount=0 )
    Expensecategories.forEach((c) => c.amount = 0);
}