export default {
    loadedMenus: (state) => state.menus,
    getPublications: (state) => state.publications,
    getAllPubTypes: (state) => state.publications_types,
    loadedArticleTypes: (state) => state.articletypes.data,
    //loadedArticle: (state) => state.article_data.data,
    loadedTags: (state) => state.allTags.data,
    loadedTag: (state) => state.singleTag.data,

}