export default {
    getPublications: (state) => state.publications,
    getAllPubTypes: (state) => state.publications_types,
    loadedArticleTypes: (state) => state.articletypes.data,
    loadedIssues: (state) => state.issues.data,
    //loadedArticle: (state) => state.article_data.data,
    loadedTags: (state) => state.allTags.data,
    loadedTag: (state) => state.singleTag.data,
}