# Volta Code Challenge Prompt
> The goal of this challenge is to demonstrate your skills, with a tool of your choice, taking data and turning it into something meaningful.

## Problem
Using the publicly available endpoint, documented here: http://docs.voltaapi.com/api/#get--stations, build an interface that exposes this data.

### Requirements
- Don't spend too much time on this, focusing on one feature is a plus
- Deliver a product that is easy for us to consume
- Commit history showing your thought/development process is always interesting

If you have any questions do not hesitate to reach out via email or phone. In consideration of your schedule, take as long as you need to return the challenge.

## What Wesley Did

At https://volta.now.sh, there is simple, clean charging station search tool, built with Algolia instantsearch.js.
The indexing and search experiences are simple and fast, while the dashboard makes it easy to configure attributes to filter on (facets), creating synonyms (eg., "California" --> "CA"), sort rankings (Active > Needs Service > Under Construction)!

Having leveraged the JavaScript API directly in another project, I wanted to explore the higher-abstraction library and widgets, instantsearch.js.
It offers some widgets and templating; more "configuration over code" experience, and I think it may be nice for long-term projects.

There is a learning curve associated with Algolia terminology and configuration specs. And I actually found myself writing more logical code than I expected.

Overall, instantsearch.js saved me some boilerplate JS, sure. But depending on the project requirments, the lower level JavaScript API may be more suited.

For example, I added a "_geoloc" property to the records (`manipulate.js`) so I could use the GeoSearch functionality, which was simple to add into the JS library searches in a previous project.
But when attempting to layer it into instantsearch.js, I found either my code or config would need quite a bit of refactoring.
Maybe just an hour or two more, but that's a lot considering the timeline for this project! :)

### Next steps

Future work could include finishing the geolocation implementation, automating updates for the index in Algolia, and perhaps more interactive mapping features.
