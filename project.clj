(defproject movmon "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async "0.4.500"]
                 [binaryage/chromex "0.8.4"]
                 [binaryage/devtools "0.9.10"]
                 [prismatic/dommy "1.1.0"]
                 [cljs-ajax "0.8.0"]
                 [binaryage/oops "0.7.0"]
                 [reagent "0.9.0-rc4"]
                 [com.bhauman/figwheel-main "0.2.3"]
                 [com.bhauman/rebel-readline-cljs "0.1.4"]
                 [environ "1.1.0"]]

  :plugins [[lein-cljsbuild "1.1.7":exclusions [[org.clojure/clojure]]]
            [lein-shell "0.5.0"]
            [lein-environ "1.1.0"]
            [lein-cooper "1.2.2"]]

  :source-paths ["src/background"
                 "src/popup"
                 "resources"]

  :clean-targets ^{:protect false} ["target"
                                    "resources/unpacked/compiled"
                                    "resources/release/compiled"]

  :profiles {:dev
             {:dependencies [[cider/piggieback "0.4.2"]
                             ;; [com.bhauman/figwheel-main "0.2.3"]
                             ;; [com.bhauman/rebel-readline-cljs "0.1.4"]
                             ]
              :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}


             :release
             {:env       {:chromex-elide-verbose-logging "true"}
              :cljsbuild {:builds
                          {:background
                           {:source-paths ["src/background"]
                            :compiler     {:output-to     "resources/release/compiled/background.js"
                                           :output-dir    "resources/release/compiled/background"
                                           :asset-path    "compiled/background"
                                           :main          movmon.background
                                           :optimizations :advanced
                                           :elide-asserts true}}
                           :popup
                           {:source-paths ["src/popup"]
                            :compiler     {:output-to     "resources/release/compiled/popup.js"
                                           :output-dir    "resources/release/compiled/popup"
                                           :asset-path    "compiled/popup"
                                           :main          movmon.popup
                                           :optimizations :advanced
                                           :elide-asserts true}}
                           }}}}

  :aliases {
            "fig-main" ["trampoline" "run" "-m" "figwheel.main" "-bb" "popup"  "-b" "background" "-r"]
           })
