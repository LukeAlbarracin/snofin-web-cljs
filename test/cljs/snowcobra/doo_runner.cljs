(ns snowcobra.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [snowcobra.core-test]))

(doo-tests 'snowcobra.core-test)

