describe("Thermostat", function() {
  var thermostat;

   beforeEach(function() {
      thermostat = new Thermostat;    
   });

   it("should begin at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
   });

   it("should begin with a PSM on", function() {
      expect(thermostat.powerSavingMode).toBe(true);
   });

   describe('increasing the temperature', function() {
      describe('PSM off', function() {
         beforeEach(function() {
            thermostat.powerSavingMode = false;
         });

         it('increases if < 32 degrees', function() {
            thermostat.temperature = 25;

            thermostat.increaseTemperature()
            expect(thermostat.temperature).toEqual(26);
         })

         it('does not increase if the temperature is >= 32 degrees', function() {
            thermostat.temperature = 32;

            thermostat.increaseTemperature()
            expect(thermostat.temperature).toEqual(32);
         })
      })
   })

    describe('PSM on', function() {
         
         it('increases if < 25 degrees', function() {
            thermostat.increaseTemperature()
            expect(thermostat.temperature).toEqual(21);
         })

         it('does not increase if the temperature is >= 25 degrees', function() {
            thermostat.temperature = 25;

            thermostat.increaseTemperature()
            expect(thermostat.temperature).toEqual(25);
         })
      })

   describe('decreasing the temperature', function() {
      it('decreases if > 10 degrees', function() {
         thermostat.decreaseTemperature()
         expect(thermostat.temperature).toEqual(19);
      })

      it('does not decrease if the temperature is <= 10 degrees', function() {
         thermostat.temperature = 10;

         thermostat.decreaseTemperature()
         expect(thermostat.temperature).toEqual(10);
      })
   })

});