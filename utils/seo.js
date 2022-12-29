const { public: { apiBase: baseUrl } } = useRuntimeConfig();

export function getLotDynamicSeo({lotType, lotName, lotImage}){
    return {
        title: `Купить ${lotType} ${lotName} в ломбарде | TimeKeeper`,
        meta: [
            {
                name: 'description',
                content: `${lotType} ${lotName} по выгодной цене в агрегаторе ломбардов TimeKeeper.`
            },
            {
                name: 'og:title',
                content: `Купить ${lotType} ${lotName} в ломбарде | TimeKeeper`
            },
            {
                name: 'og:description',
                content: `${lotType} ${lotName} по выгодной цене в агрегаторе ломбардов TimeKeeper.`
            },
            {
                name: 'og:image',
                content: `${baseUrl}/${lotImage || '/img/brand_stub.png'}`
            }
        ]
    }
}
