'use strict';

(function () {
    // instantsearch exposed via script in index.html
    const search = instantsearch({
        appId: '9UWQGAH5EE',
        apiKey: '47508a0576f609bc4f7abc2e59ad8ed2',
        indexName: 'volta-stations'

    })

// initialize SearchBox
    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: 'search volta charging stations',
        })
    )

// initialize hits widget
    search.addWidget(
        instantsearch.widgets.infiniteHits({
            container: '#hits',
            templates: {
                empty: '<p>Could not find results for <em>\"{{query}}\"</em></p>',
                item: formatHits,
                hitsPerPage: 5
            },
            cssClasses: {
                root: 'flex flex-wrap justify-around',
                item: 'w-90 w-33-l pa2 mb3 br2 ba bw2 b--dark-blue bg-lightest-blue near-black',
                showmore: 'tc'
            }
        })
    )

    search.addWidget(
        instantsearch.widgets.refinementList({
            container: '#refinement-list-state',
            attributeName: 'state',
            limit: 4,
            operator: 'and',
            showMore: {
                templates: {
                    active: '<a class="dib mt2 f6" href="#">Show less</a>',
                    inactive: '<a class="dib mt2 f6" href="#">Show more</a>'
                }
            },
            sortBy: ['isRefined', 'count:desc', 'name:asc'],
            templates: {
                header: '<span class="dib mb2"><b>State</b></span>',
                item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{name}} <span class="black-50">({{count}})</span>'
            },
            cssClasses: {
                body: 'h4 overflow-y-scroll'
            }
        })
    )
    search.addWidget(
        instantsearch.widgets.refinementList({
            container: '#refinement-list-zip',
            attributeName: 'zip_code',
            limit: 4,
            operator: 'and',
            showMore: {
                templates: {
                    active: '<a class="dib mt2 f6" href="#">Show less</a>',
                    inactive: '<a class="dib mt2 f6" href="#">Show more</a>'
                }
            },
            sortBy: ['isRefined', 'count:desc', 'name:asc'],
            templates: {
                header: '<span class="dib mb2"><b>Zip code</b></span>',
                item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{name}} <span class="black-50">({{count}})</span>'
            },
            cssClasses: {
                body: 'h4 overflow-y-scroll'
            }
        })
    )
   search.addWidget(
        instantsearch.widgets.refinementList({
            container: '#refinement-list-status',
            attributeName: 'status',
            limit: 4,
            operator: 'and',
            sortBy: ['isRefined', 'count:desc', 'name:asc'],
            templates: {
                header: '<span class="dib mb2"><b>Status</b></span>',
                item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{name}} <span class="black-50">({{count}})</span>'
            },
            cssClasses: {
                body: 'h4 overflow-y-scroll'
            }
        })
    )
   search.addWidget(
        instantsearch.widgets.refinementList({
            container: '#refinement-list-city',
            attributeName: 'city',
            limit: 4,
            operator: 'and',
            showMore: {
                templates: {
                    active: '<a class="dib mt2 f6" href="#">Show less</a>',
                    inactive: '<a class="dib mt2 f6" href="#">Show more</a>'
                }
            },
            sortBy: ['isRefined', 'count:desc', 'name:asc'],
            templates: {
                header: '<span class="dib mb2"><b>City</b></span>',
                item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{name}} <span class="black-50">({{count}})</span>'
            },
            cssClasses: {
                body: 'h4 overflow-y-scroll'
            }
        })
    )

    search.start()

    function formatHits(item) {
        const zipCode = item._highlightResult.zip_code || item.zip_code

        let statusColor = item.status === 'active' ? 'green' : 'orange'
        let statusCss = 'tc pa1 br2 f7 ttu bg-'
        statusCss += statusColor

        let completionDate = new Date(item.completion_date)
        let now = Date.now()

        if (completionDate.valueOf() > now) completionDate = 'est. ' + completionDate.toLocaleDateString()
        else completionDate = completionDate.toLocaleDateString()
        const latlong = item.location.coordinates.reverse().join()

        return `<article>
                    <div class="pa2 flex justify-between">
                        <h3 class="ma0 pa1 f3 fw5 tc">${item._highlightResult.name.value.slice(0, -3)}</h3>
                        <div class="w4">
                            <div class="${statusCss}">${item._highlightResult.status.value}</div>
                            <p class="ma0 pa1">${completionDate}</p>
                        </div>
                    </div>
                    
                    <a href="https://www.google.com/maps/place/${latlong}" class="link w-100 mb2 flex items-center justify-around">
                        <img class="br2" src="https://maps.googleapis.com/maps/api/staticmap?center=${latlong}&zoom=13&size=200x150&maptype=roadmap&markers=color:${statusColor}%7Clabel:V%7C${latlong}&key=AIzaSyB4HvN8qibdQ6tUKuSpUiwPuA2aDpI5deQ" alt="">
                        <div class="link near-white bg-dark-gray br2 ph3">
                            <p class="mb0">${item._highlightResult.street_address.value}</p>
                            <p class="mt0">${item._highlightResult.city.value}, ${item._highlightResult.state.value} ${zipCode}</p>
                        </div>
                    </a>
                </article>`
    }

}())
