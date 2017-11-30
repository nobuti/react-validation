import React from 'react';
import { validEmail, required, lessThan, validate } from './index';

describe('validation', () => {
  describe('rules', () => {
    describe('emails', () => {
      describe('single', () => {
        it('empty email', () => {
          expect(validEmail('')).toBe(true);
        });

        it('good email', () => {
          expect(validEmail('buti@nobuti.com')).toBe(true);
        });

        it('bad email', () => {
          expect(validEmail('buti@.com')).toBe(false);
        });
      });

      describe('multiple', () => {
        it('good email', () => {
          expect(
            validEmail('buti@nobuti.com, wadus@aol.es, foo@wadus-net.com')
          ).toBe(true);
        });

        it('bad email', () => {
          expect(validEmail('buti@nobuti.com, wadus.com, foo@wadus.com')).toBe(
            false
          );
        });
      });
    });

    describe('require', () => {
      it('empty', () => {
        expect(required('')).toBe(false);
      });

      it('filled', () => {
        expect(required('wadus')).toBe(true);
      });
    });

    describe('lessThan', () => {
      it('length 3', () => {
        const lessThan3 = lessThan(3);
        expect(lessThan3('')).toBe(true);
        expect(lessThan3('ab')).toBe(true);
        expect(lessThan3('abcd')).toBe(false);
      });

      it('length 8', () => {
        const lessThan8 = lessThan(8);
        expect(lessThan8('')).toBe(true);
        expect(lessThan8('viva yo')).toBe(true);
        expect(lessThan8('viva el vino')).toBe(false);
      });
    });
  });

  describe('validate', () => {
    const validations = {
      To: [required, validEmail],
      CC: [validEmail],
      BCC: [validEmail],
      Subject: [required, lessThan(20)],
      Message: [required]
    };

    it('all fields empty', () => {
      const state = {
        To: '',
        CC: '',
        BCC: '',
        Subject: '',
        Message: ''
      };

      expect(validate(state, validations)).toEqual({
        To: true,
        Subject: true,
        Message: true
      });
    });

    it('all fields filled properly', () => {
      const state = {
        To: 'buti@nobuti.com',
        CC: 'wadus@foo.com',
        BCC: 'spy@foo.com',
        Subject: 'Ahoy',
        Message: 'Lorem ipsum here'
      };

      expect(validate(state, validations)).toEqual({});
    });

    it('empty subject', () => {
      const state = {
        To: 'buti@nobuti.com',
        CC: 'wadus@foo.com',
        BCC: 'spy@foo.com',
        Subject: '',
        Message: 'Lorem ipsum here'
      };

      expect(validate(state, validations)).toEqual({ Subject: true });
    });

    it('huge subject', () => {
      const state = {
        To: 'buti@nobuti.com',
        CC: 'wadus@foo.com',
        BCC: '',
        Subject:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum massa sit amet elit porta dictum. Praesent eu erat quis.',
        Message: 'Lorem ipsum here'
      };

      expect(validate(state, validations)).toEqual({ Subject: true });
    });

    it('wrong email', () => {
      const state = {
        To: 'buti@nobuti.com',
        CC: 'wadus',
        BCC: '',
        Subject: 'Ahoy',
        Message: 'Lorem ipsum here'
      };

      expect(validate(state, validations)).toEqual({ CC: true });
    });
  });
});
