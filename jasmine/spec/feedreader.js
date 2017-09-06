/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            // Run as expected
            expect(allFeeds).toBeDefined();
        });

        allFeeds.forEach(function(feed, idx) {
            testEachFeeds(feed, idx);
        });

        /**
         * @description validate each object in allFeeds array to check whether attributes are defined
         * @param {Object} feed - The feed Object
         * @param {int} idx - The index of the feed Object
         */
        function testEachFeeds(feed, idx) {
            it('should contain attribute url in idx: ' + idx, function() {
                // Run as expected
                expect(feed.url).toBeDefined();
            });

            it('should contain attribute name in idx: ' + idx, function() {
                // Run as expected
                expect(feed.name).toBeDefined();
            });
        }

    });


    /**
     * @description Tests for interaction with the Menu
     */
    describe('The menu', function() {

        var $menuLink = $('.menu-icon-link'),
            $body = $('body');

        it("should hide menu by default", function() {
            var actualMenuClassLength = $body.hasClass('menu-hidden');
            var expectedMenuClassLength = true;

            expect(actualMenuClassLength).toBe(expectedMenuClassLength);
        });

        it('should change menu visibility when clicked', function() {
            // Open Menu
            $menuLink.click();
            var actualMenuBeforeClick = $body.hasClass('menu-hidden');
            var expectedMenuBeforeClick = false;

            expect(actualMenuBeforeClick).toBe(expectedMenuBeforeClick);

            // Close Menu
            $menuLink.click();
            var actualMenuAfterClick = $body.hasClass('menu-hidden');
            var expectedMenuAfterClick = true;

            expect(actualMenuAfterClick).toBe(expectedMenuAfterClick);
        });

    });

    describe("Initial Entries", function() {
        var $container = $('.feed');

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should contain at least one entry', function() {
            var $entries = $container.find('.entry');

            expect($entries.length).toBeGreaterThan(0);
        });
    });

    describe("New Feed Selection", function() {
        var $container = $('.feed');
        var firstLoadFeed;

        beforeEach(function(done) {
            // Load first feed
            loadFeed(0, function() {
                firstLoadFeed = $container.html();
                // Load second feed
                loadFeed(1, done);
            });
        });

        it('should have content changed', function() {
            var secondLoadFeed = $container.html();

            expect(firstLoadFeed).not.toEqual(secondLoadFeed);
        });

    });

}());
