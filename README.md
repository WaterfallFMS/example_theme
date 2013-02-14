Example Theme
=============

A very minimal theme that can be imported into the waterfall platform.

Waterfall theme tester
----------------------
The waterfall theme tester is available at https://github.com/WaterfallFMS/waterfall_theme_tester.

Download and install it

Documentation
-------------
The requirements and other documentation should have been provided by your sales contact.  Please review it prior to attempting to generate a theme.

Suggested workflow
==================

1. Replace the admin-logo.png and favicon.ico
1. Add all needed images, javascript, and CSS files
1. Modify the layouts
1. Run theme tester (will check and render your theme)
1. Correct any issues the tester presents (will be highlighted in red)
1. Correct or find ways around any warnings (will be highlighted in yellow)
1. Check the rendered views in a local browser (will be in /views)
1. Rinse and repeat

Submitting a theme
==================
Once the theme is complete archive the directory (zip, or tgz) and send it to your sales contact.  He/she will pass it alone to an integration engineer who will accept or reject the theme.

This can be a lengthy process so please allow enough lead time.  The safe lead time is 4 weeks from time of acceptance to time of application.

Acceptance
----------
If the theme is accepted a schedule date will sent for when the changes will be applied.  Generally the update is made 2 weeks or less from the date the theme is accepted, if early enough in the update cycle.  If the window is missed then it could be 4 weeks before an update is made.

Note: This date represents the earliest possible time an update can be performed, and is therefore not negotiable.

Rejection
---------
A theme can be rejected for any reason, but those reasons will be emailed back so they can be corrected.  The turn around time for a judgement could be as much as 1 week, so it is imperative that the theme checker be used to prevent unneeded back and forth.

In addition to all the reason listed by the theme checker the following are common problems to watch out for.

1. Corrupt archive - Always test the archive on a different machine before email it out
1. Virus infected files - Run the repo and the archive through a virus scanner
1. XSS javascript attempts - Only include javascript from known sources
1. Syntax errors - Check the rendered views, css, and javascript through a syntax checker: http://validator.w3.org/#validate_by_upload
