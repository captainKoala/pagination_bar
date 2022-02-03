"use strict";

/**
 * https://github.com/captainKoala/pagination_bar
 * **/

const LINKS_PER_PAGINATOR = 5;

const PAGINATION_CSS_CLASS = "pagination";
const PAGE_ITEM_CSS_CLASS = "page-item";
const PAGE_LINK_CSS_CLASS = "page-link";
const LINK_ACTIVE_CSS_CLASS = "active";
const LINK_DISABLED_CSS_CLASS = "disabled";



const createPaginatorItem = (pageNumber, isActive=false, isDisabled=false,
                             itemText="", url="", params="",
                             pageItemClasses="", pageLinkClasses="",
                             linkActiveClasses, linkDisabledClasses) => {
    /**
     * Creates li-element for paginator and return it.
     */

    let li = document.createElement("li");
    let a = document.createElement("a");

    for (let cl of pageItemClasses.split(","))
        li.classList.add(cl);
    if (isActive)
        for  (let cl of linkActiveClasses.split(","))
            li.classList.add(cl);

    if (isDisabled)
        for (let cl of linkDisabledClasses.split(","))
            li.classList.add(cl);

    for (let cl of pageLinkClasses.split(","))
        a.classList.add(cl);
    a.href = url ? url : `?page=${pageNumber}&${params}`;
    a.textContent = itemText ? itemText : pageNumber;

    li.appendChild(a);
    return li;
}

document.addEventListener("DOMContentLoaded", event => {
    const paginators = document.querySelectorAll("." + PAGINATION_CSS_CLASS);

    for (let paginator of paginators)
    {
        let numPages = +paginator.dataset.numPages;
        let currentPage = +paginator.dataset.currentPage;
        let linksPerPaginator = +paginator.dataset.linksPerPaginator || LINKS_PER_PAGINATOR;
        let pageItemClasses = paginator.dataset.pageItemClasses || PAGE_ITEM_CSS_CLASS;
        let pageLinkClasses = paginator.dataset.pageLinkClasses || PAGE_LINK_CSS_CLASS;
        let linkActiveClasses = paginator.dataset.linkActiveClasses || LINK_ACTIVE_CSS_CLASS;
        let linkDisabledClasses = paginator.dataset.linkDisabledClasses || LINK_DISABLED_CSS_CLASS;

        let params = paginator.dataset.params;

        if (!numPages || !currentPage)
            return;

        if (numPages > linksPerPaginator)
            paginator.appendChild(createPaginatorItem(1, false,
                currentPage === 1, "<<", "", params, pageItemClasses, pageLinkClasses,
                linkActiveClasses, linkDisabledClasses));
        paginator.appendChild(createPaginatorItem(currentPage - 1, false,
            currentPage === 1, "<", "", params, pageItemClasses, pageLinkClasses,
            linkActiveClasses, linkDisabledClasses));

        let startPageNumber = currentPage - Math.floor(linksPerPaginator/2);
        let endPageNumber = currentPage + Math.floor((linksPerPaginator-1)/2);

        if (startPageNumber < 1) {
            endPageNumber += 1 - startPageNumber;
            startPageNumber = 1;
        }
        if (endPageNumber > numPages)
            endPageNumber = numPages;

        while (endPageNumber - startPageNumber + 1 < linksPerPaginator && startPageNumber > 1)
            startPageNumber--;

        for (let i = startPageNumber; i <= endPageNumber; i++) {
            paginator.appendChild(
                createPaginatorItem(i, i === currentPage, false, false,
                    i === currentPage ? "#" : "", params, pageItemClasses, pageLinkClasses, linkActiveClasses,
                    linkDisabledClasses));
        }

        paginator.appendChild(
            createPaginatorItem(currentPage + 1, false,
                currentPage === numPages, ">", "", params, pageItemClasses, pageLinkClasses,
                linkActiveClasses, linkDisabledClasses));
        if (numPages > linksPerPaginator)
            paginator.appendChild(
                createPaginatorItem(numPages, false,
                    currentPage === numPages, ">>", "", params, pageItemClasses, pageLinkClasses,
                    linkActiveClasses, linkDisabledClasses));
    }
})