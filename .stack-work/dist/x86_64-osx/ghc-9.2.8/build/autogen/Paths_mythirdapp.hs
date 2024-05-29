{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
{-# OPTIONS_GHC -w #-}
module Paths_mythirdapp (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where


import qualified Control.Exception as Exception
import qualified Data.List as List
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude


#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,0,0] []

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir `joinFileName` name)

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath



bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath
bindir     = "/Users/ralf/Documents/GitHub/yesod-react/.stack-work/install/x86_64-osx/20fedc6b56de437fd1bc5d5b49260c4caa6e14ac84e0f34d9eb2c2ab9f9f3995/9.2.8/bin"
libdir     = "/Users/ralf/Documents/GitHub/yesod-react/.stack-work/install/x86_64-osx/20fedc6b56de437fd1bc5d5b49260c4caa6e14ac84e0f34d9eb2c2ab9f9f3995/9.2.8/lib/x86_64-osx-ghc-9.2.8/mythirdapp-0.0.0-5xCCO5iq2fdH2Ks8YiSU4L"
dynlibdir  = "/Users/ralf/Documents/GitHub/yesod-react/.stack-work/install/x86_64-osx/20fedc6b56de437fd1bc5d5b49260c4caa6e14ac84e0f34d9eb2c2ab9f9f3995/9.2.8/lib/x86_64-osx-ghc-9.2.8"
datadir    = "/Users/ralf/Documents/GitHub/yesod-react/.stack-work/install/x86_64-osx/20fedc6b56de437fd1bc5d5b49260c4caa6e14ac84e0f34d9eb2c2ab9f9f3995/9.2.8/share/x86_64-osx-ghc-9.2.8/mythirdapp-0.0.0"
libexecdir = "/Users/ralf/Documents/GitHub/yesod-react/.stack-work/install/x86_64-osx/20fedc6b56de437fd1bc5d5b49260c4caa6e14ac84e0f34d9eb2c2ab9f9f3995/9.2.8/libexec/x86_64-osx-ghc-9.2.8/mythirdapp-0.0.0"
sysconfdir = "/Users/ralf/Documents/GitHub/yesod-react/.stack-work/install/x86_64-osx/20fedc6b56de437fd1bc5d5b49260c4caa6e14ac84e0f34d9eb2c2ab9f9f3995/9.2.8/etc"

getBinDir     = catchIO (getEnv "mythirdapp_bindir")     (\_ -> return bindir)
getLibDir     = catchIO (getEnv "mythirdapp_libdir")     (\_ -> return libdir)
getDynLibDir  = catchIO (getEnv "mythirdapp_dynlibdir")  (\_ -> return dynlibdir)
getDataDir    = catchIO (getEnv "mythirdapp_datadir")    (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "mythirdapp_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "mythirdapp_sysconfdir") (\_ -> return sysconfdir)




joinFileName :: String -> String -> FilePath
joinFileName ""  fname = fname
joinFileName "." fname = fname
joinFileName dir ""    = dir
joinFileName dir fname
  | isPathSeparator (List.last dir) = dir ++ fname
  | otherwise                       = dir ++ pathSeparator : fname

pathSeparator :: Char
pathSeparator = '/'

isPathSeparator :: Char -> Bool
isPathSeparator c = c == '/'
