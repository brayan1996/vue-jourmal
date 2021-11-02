export default () => ({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),//12356
            date: new Date().toDateString(),//sab 27 jul
            text : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui itaque fuga adipisci, totam, eos recusandae ut repellat nihil magnam sequi ipsum doloremque dolorem assumenda, praesentium autem facere fugiat quae!',
            piscture:null
        },
        {
            id: new Date().getTime() + 1000,//12356
            date: new Date().toDateString(),//sab 27 jul
            text : '  ut repellat nihil magnam sequi ipsum doloremque dolorem assumenda, praesentium autem facere fugiat quae!',
            piscture:null
        },
        {
            id: new Date().getTime() + 2000,//12356
            date: new Date().toDateString(),//sab 27 jul
            text : '  sit amet consectetur adipisicing elit. Aspernatur qui itaque fuga adipisci, totam, eos recusandae ut repellat nihil magnam sequi ipsum doloremque dolorem assumenda, praesentium autem facere fugiat quae!',
            piscture:null
        },
        
    ]
})