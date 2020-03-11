task :default => :hello

desc "hello world"
task :hello do
    sh "node hello.js"
end

desc "Static website"
task :static do
    sh "firefox 127.0.0.1:8000"
    sh "python3 -m http.server 8000 --bind 127.0.0.1"
end

# test regular
#task :clean do
#    sh "rm -rf build"
#end
