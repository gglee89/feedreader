/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            if (typeof allFeeds === "undefined") {
                // Error handler for undefined variables
                expect(allFeeds).not.toBeDefined();
            } else {
                // Run as expected
                expect(allFeeds).toBeDefined();
            }
        });

        allFeeds.forEach(function(feed, idx, arr) {
            testEachFeeds(feed, idx);
        });

        /**
         * @description validate each object in allFeeds array to check whether attributes are defined
         * @param {Object} feed - The feed Object
         * @param {int} idx - The index of the feed Object
         */
        function testEachFeeds(feed, idx) {
            it('should contain attribute url in idx: ' + idx, function() {
                if (typeof feed.url === "undefined") {
                    // Error handler for undefined variables
                    expect(feed.url).not.toBeDefined();
                } else {
                    // Run as expected
                    expect(feed.url).toBeDefined();
                }
            });

            it('should contain attribute name in idx: ' + idx, function() {
                if (typeof feed.name === "undefined") {
                    // Error handler for undefined variables
                    expect(feed.name).not.toBeDefined();
                } else {
                    // Run as expected
                    expect(feed.name).toBeDefined();
                }
            });
        }

    });


    /**
     * @description Tests for interaction with the Menu
     */
    describe('The menu', function() {

        var $menuLink = $('.menu-icon-link');

        it("should hide menu by default", function() {
            var actualMenuClassLength = $('.menu-hidden').length;
            var expectedMenuClassLength = 1;

            expect(actualMenuClassLength).toBe(expectedMenuClassLength);
        });

        it('should change menu visibility when clicked', function() {
            // Open Menu
            $menuLink.click();
            var actualMenuBeforeClick = $('.menu-hidden').length;
            var expectedMenuBeforeClick = 0;

            expect(actualMenuBeforeClick).toBe(expectedMenuBeforeClick);

            // Close Menu
            $menuLink.click();
            var actualMenuAfterClick = $('.menu-hidden').length;
            var expectedMenuAfterClick = 1;

            expect(actualMenuAfterClick).toBe(expectedMenuAfterClick);
        });

    });

    describe("Initial Entries", function() {
        var $container = $('.feed');

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should contain at least one entry', function(done) {
            var $entries = $container.find('.entry');

            expect($entries.length).toBeGreaterThan(0);
            done();
        });
    });

    describe("New Feed Selection", function() {
        var $container = $('.feed');

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have content changed', function(done) {
            var entries = $container.html();

            expect(entries.length).not.toBeNull();
            expect(entries.length).toBeDefined();
            done();
        });

    });

}());
